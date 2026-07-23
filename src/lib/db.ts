import { createServerFn } from '@tanstack/react-start'
import fs from 'node:fs/promises'
import path from 'node:path'

const dataDir = path.resolve(process.cwd(), 'data')
const postsFile = path.join(dataDir, 'posts.json')
const projectsFile = path.join(dataDir, 'projects.json')

// Helper to safely read JSON
async function readJson<T>(filePath: string): Promise<T[]> {
  try {
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (err) {
    return []
  }
}

// Helper to safely write JSON
async function writeJson(filePath: string, data: any) {
  await fs.mkdir(dataDir, { recursive: true })
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
}

import postsData from '../../data/posts.json'
import projectsData from '../../data/projects.json'

// ---------------------------------------------------------
// POSTS
// ---------------------------------------------------------

export const getPosts = async () => {
  const posts = postsData as any[]
  // Sort newest first
  return posts.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
}

export const getPostBySlug = async ({ data: slug }: { data: string }) => {
  const posts = postsData as any[]
  const post = posts.find((p) => p.slug === slug)
  if (!post) throw new Error('Post not found')
  return post
}

export const createPost = createServerFn({ method: 'POST' })
  .validator((post: any) => post)
  .handler(async ({ data: post }) => {
    const posts = await readJson<any>(postsFile)
    
    // Auto-generate slug from title if not provided
    const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    
    const newPost = {
      slug,
      created_at: new Date().toISOString(),
      ...post
    }
    
    posts.push(newPost)
    await writeJson(postsFile, posts)
    
    return { success: true, slug: newPost.slug }
  })


export const updatePost = createServerFn({ method: 'POST' })
  .validator((post: any) => post)
  .handler(async ({ data: post }) => {
    const posts = await readJson<any>(postsFile)
    const index = posts.findIndex((p) => p.slug === post.slug)
    if (index === -1) throw new Error('Post not found')
    
    posts[index] = { ...posts[index], ...post }
    await writeJson(postsFile, posts)
    
    return { success: true, slug: post.slug }
  })

export const deletePost = createServerFn({ method: 'POST' })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const posts = await readJson<any>(postsFile)
    const filtered = posts.filter((p) => p.slug !== slug)
    await writeJson(postsFile, filtered)
    
    return { success: true }
  })

// ---------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------

export const getProjects = async () => {
  const projects = projectsData as any[]
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const createProject = createServerFn({ method: 'POST' })
  .validator((project: any) => project)
  .handler(async ({ data: project }) => {
    const projects = await readJson<any>(projectsFile)
    
    const id = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    
    const newProject = {
      id,
      date: new Date().toISOString().substring(0, 7), // YYYY-MM
      ...project
    }
    
    projects.push(newProject)
    await writeJson(projectsFile, projects)
    
    return { success: true, id: newProject.id }
  })

export const getProjectById = async ({ data: id }: { data: string }) => {
  const projects = projectsData as any[]
  const project = projects.find((p) => p.id === id)
  if (!project) throw new Error('Project not found')
  return project
}

export const updateProject = createServerFn({ method: 'POST' })
  .validator((project: any) => project)
  .handler(async ({ data: project }) => {
    const projects = await readJson<any>(projectsFile)
    const index = projects.findIndex((p) => p.id === project.id)
    if (index === -1) throw new Error('Project not found')
    
    projects[index] = { ...projects[index], ...project }
    await writeJson(projectsFile, projects)
    
    return { success: true, id: project.id }
  })

export const deleteProject = createServerFn({ method: 'POST' })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    const projects = await readJson<any>(projectsFile)
    const filtered = projects.filter((p) => p.id !== id)
    await writeJson(projectsFile, filtered)
    
    return { success: true }
  })
