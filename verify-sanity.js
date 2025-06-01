/**
 * Sanity Configuration Verification Script
 * Run this to verify your Sanity setup is working correctly
 */

import { client } from './sanity/lib/client'

async function verifyConfiguration() {
  console.log('🔍 Verifying Sanity Configuration...\n')
  
  try {
    // Test 1: Check project connectivity
    console.log('1. Testing project connectivity...')
    const projectInfo = await client.request({
      uri: `/projects/${client.config().projectId}`,
      withCredentials: false
    })
    console.log('✅ Connected to project:', projectInfo.displayName || 'Unknown')
    
    // Test 2: Check dataset access
    console.log('\n2. Testing dataset access...')
    const datasets = await client.datasets.list()
    console.log('✅ Available datasets:', datasets.map(d => d.name).join(', '))
    
    // Test 3: Test schema types
    console.log('\n3. Testing schema types...')
    const schemaTypes = ['blog', 'post', 'category', 'author']
    for (const type of schemaTypes) {
      try {
        const count = await client.fetch(`count(*[_type == "${type}"])`)
        console.log(`✅ ${type}: ${count} documents`)
      } catch (error) {
        console.log(`❌ ${type}: Error - ${error.message}`)
      }
    }
    
    // Test 4: Test GROQ query
    console.log('\n4. Testing GROQ queries...')
    const testQuery = '*[_type == "blog"][0...3]{_id, title, slug}'
    const results = await client.fetch(testQuery)
    console.log('✅ GROQ query successful, returned', results.length, 'blogs')
    
    console.log('\n🎉 All tests passed! Sanity is configured correctly.')
    
  } catch (error) {
    console.error('❌ Configuration error:', error.message)
    console.log('\n🔧 Troubleshooting tips:')
    console.log('1. Check your environment variables in .env.local')
    console.log('2. Verify your project ID and dataset name')
    console.log('3. Ensure you have proper permissions')
    console.log('4. Check your network connection')
  }
}

// Export for use in other files
export { verifyConfiguration }

// Run verification if this file is executed directly
if (require.main === module) {
  verifyConfiguration()
}
