const getListStudentIds = (array) => {
  if(Array.isArray(array)){
    return array.map((item) => item.id)
  }else{
    return []
  }
}

export default getListStudentIds;
