# text2pdf

Simple nodejs CLI application that generates a PDF document from text.
Made for [twindle issue #301](https://github.com/twindle-co/twindle/issues/301)

# Installation
Make sure you have [nodejs and npm installed](https://nodejs.org/en/download/)  
Clone the repo, navigate to the *text_to_pdf* folder and run:  
    
    `npm install`
    
# Using text2pdf
Options:  
--version: Show version number   
-h: Show help  
-p, --pdf: convert text to pdf (use quotes for multi word arguments)

# Example:
`node text2pdf -p "some text"`  generates a pdf document from the text
