class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        return dirtyFileName.split('_').slice(1, dirtyFileName.length-1).join('_').split('.').slice(0, 2).join('.');
    }
}

//?input
//a string
//so now that string conains intergers and letters

//*info
//using a function to extract then file name and leave other things
//so assuming it has started with date represented as long number
//followed by an underscore
//so in that string we will have a file name and an extention
//so we shall always have an extra extention at the end

//!test cases
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION
// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34
// 1231231223123131_myFile.tar.gz2
//soln
// FILE_NAME.EXTENSION
// This_is_an_otherExample.mpg
// myFile.tar

// Acceptable characters for random tests:
// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789
//so anything outside this makes everything invalid
//the kata author recommend using a REgEx and groups to solve this kata

//What can l do
//so since it says there are numbers at the start of the string separated with the underscore right
//so l saying is typeof is a number then we repace with nothing to eliminate the fist numbers
//then since there will alwasy be an extention after at the end then we will remove everthing replace it with nothing leaving us with the name only 
//we will return that name as our solution