## Thinking notes page

The Reader component should really take in a list of words rather than a big blob of text. Between each word there would then be a bit of punctuation. To do this, we can split on alphanumeric versus whitespace/punctuation characters.
The data structure that the Reader component renders can then look like:

- Word
- Annotation
- Following Punctation
- Commonness

in an array.

Do we generate these parsings in the backend? Probably.
We can use the internet strings dataset to assign a likeliness to know it value to each word that we need to process, then on the reader, we can show words from rarest to most common.

## Extract Selection and generation

We need a dropdown/search/filtering to pick an appropriate extract to read.
We also need the ability to fetch news from the API, and upload custom extracts.
We could also add Project Gutenberg scraping.
