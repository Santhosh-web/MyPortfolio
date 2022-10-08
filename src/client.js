import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: '197bv8xz',
  dataset: 'production',
  apiversion: '2022-02-01',
  useCdn: true,
  token:
    'skKVUxl24a7jBUe13nuCckTSJoQSrTbaDwN9XiOm79UzQKgJUPfTqXmq2gOyBzWoiUXjZMlOUFzLN0GEHvhKrCAgnFnBHTbo2cHdnzSqxHHtvzlaatNHeBPhziqB1DWSuJhvTlPMYachjdHvwBHFizdPiI0nX50lo8jdzNIz7scMtMGWdNLP',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
