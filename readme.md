#Only Connect Letters Game
The BBC program, Only Connect, has a letters game in the last round where words are presented with the vowels removed; each word relates to one of 5 or 6 categories for that round, each category having 3 or 4 questions.

For instance, if the category were car makers clues may be presented as follows:

    VXHLL
    Answer: Vauxhall
    
    FRD
    Answer: Ford
    
    LP HRM
    Answer: Alpha Romeo

Then the next category might be TV shows:

    STNDRS
    Answer: EastEnders

And so on. You'll notice that the third car, Alpha Romeo, hsa a space in the name, the number of spaces in the answer are preserved however they do not appear in the same position as you would expect to find them in the full name.

For details of the motivation behind the project please see my blog post here:

###node install
Clone the repo to a location, enter that location and type:

    npm install

A load of dependancy files will download and you should see output similar to the following:

    bootstrap@3.3.1 node_modules\bootstrap
    
    express@4.10.4 node_modules\express
    +-- path-to-regexp@0.1.3
    +-- utils-merge@1.0.0
    +-- merge-descriptors@0.0.2
    +-- escape-html@1.0.1
    +-- cookie@0.1.2
    +-- cookie-signature@1.0.5
    +-- fresh@0.2.4
    +-- range-parser@1.0.2
    +-- vary@1.0.0
    +-- parseurl@1.3.0
    +-- methods@1.1.0
    +-- finalhandler@0.3.2
    +-- serve-static@1.7.1
    +-- media-typer@0.3.0
    +-- content-disposition@0.5.0
    +-- depd@1.0.0
    +-- qs@2.3.3
    +-- on-finished@2.1.1 (ee-first@1.1.0)
    +-- etag@1.5.1 (crc@3.2.1)
    +-- proxy-addr@1.0.4 (ipaddr.js@0.1.5, forwarded@0.1.0)
    +-- debug@2.1.0 (ms@0.6.2)
    +-- type-is@1.5.3 (mime-types@2.0.3)
    +-- accepts@1.1.3 (negotiator@0.4.9, mime-types@2.0.3)
    +-- send@0.10.1 (ms@0.6.2, destroy@1.0.3, mime@1.2.11)

###Running
From a command line launch the server by typing:

    node app.js

Then navigate to your browser and enter the following URL:

    http://localhost:8000
