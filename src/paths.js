const paths={
    collections:(sort)=>sort?"/Collections?sort="+sort:"/Collections",
    collectionList:(collection,type)=>"/Collections/"+collection+(type?"?type="+type:""),
    profile:(collection,name)=>`/Collections/${collection}/${name}`
}
export default paths