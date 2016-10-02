# Kristian's Jekyll Site

Statically generated using [Jekyll](http://jekyllrb.com/). JavaScript uses jQuery for DOM manipulation. Site does not require JavaScript to function.

## Installation
1. Clone the repository to an *empty* folder of your choice
2. Install [Jekyll](http://jekyllrb.com/docs/installation/)
3. cd to the folder
4. Type ``jekyll serve``
5. Navigate to ``http://localhost:4000``

## Editing
**Highly recommended to read the [Jekyll docs](http://jekyllrb.com/docs/home/) before making edits.**
Currently, all sites are static html pages. No blog-related content is being generated. Changes made to the html code, all includes, and collections should be seamlessly reflected.
The SCSS is split up into files that differ based on each include file, so add any edits into there.
All folders that do not contain leading underscores will be directly copied into a ``_site`` directory that should already have been generated if the site is being served.
