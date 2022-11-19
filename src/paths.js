const paths={
    collections:(sort)=>sort?"/Collections?sort="+sort:"/Collections",
    collectionList:(collection,type)=>"/Collections/"+collection+(type?"?type="+type:""),
    profile:(collection,name,id)=>{
        // console.log(collection,name,id);
        return `/Collections/${collection}/${id}`}
}
export default paths