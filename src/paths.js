const paths={
    collections:(sort)=>sort?"/Collections?sort="+sort:"/Collections",
    collectionList:(collection,type)=>"/Collections/"+collection+(type?"?type="+type:""),
    profile:(name)=>`/Authors/${name}`
}
export default paths