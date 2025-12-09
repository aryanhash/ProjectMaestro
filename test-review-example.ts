// Test file for Cline CLI PR Review verification
// This file contains intentional issues for testing the review system

import { execSync } from 'child_process'

// Security Issue: SQL Injection vulnerability
export function getUserData(userId: string) {
  const query = `SELECT * FROM users WHERE id = '${userId}'`
  // This is vulnerable to SQL injection
  return execSync(`psql -c "${query}"`)
}

// Performance Issue: N+1 query problem
export async function getUsersWithPosts() {
  const users = await fetch('/api/users').then(r => r.json())
  
  // N+1 problem: fetching posts for each user individually
  return Promise.all(users.map(async (user: any) => {
    const posts = await fetch(`/api/users/${user.id}/posts`).then(r => r.json())
    return { ...user, posts }
  }))
}

// Bug: Missing error handling
export function divideNumbers(a: number, b: number) {
  return a / b // No check for division by zero
}

// Style Issue: Inconsistent naming
export const API_KEY = process.env.apiKey // Should use UPPER_SNAKE_CASE
export const baseUrl = 'https://api.example.com' // Should use UPPER_SNAKE_CASE

// Security Issue: Hardcoded credentials
const password = 'admin123' // Should never hardcode passwords
const secretKey = 'my-secret-key-12345'

// Performance Issue: Inefficient algorithm
export function findDuplicate(arr: number[]) {
  // O(n²) complexity - inefficient for large arrays
  const duplicates = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i])
      }
    }
  }
  return duplicates
}

// Style Issue: Unused variable
const unusedVariable = 'this is never used'

// Bug: Potential null reference
export function getFirstName(user: any) {
  return user.name.split(' ')[0] // user.name might be null/undefined
}

// Security Issue: XSS vulnerability
export function renderUserInput(input: string) {
  return `<div>${input}</div>` // No sanitization - XSS risk
}

// Performance Issue: Memory leak potential
let cache: any = {}
export function addToCache(key: string, value: any) {
  cache[key] = value // No size limit - could cause memory issues
}

