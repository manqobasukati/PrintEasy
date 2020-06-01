function extractType(id){
    return id.substring(id.indexOf('-')+1,id.length);
 }

 function getFilename(filename){
    return filename.substring(0,filename.indexOf('.'));
  
  }