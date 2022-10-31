const paths={
    collections:(type)=>type?"/Collections?type="+type:"/Collections",
    collectionList:(list,type)=>"/Collections/"+list+(type?"?type="+type:""),
    profile:(name)=>`/Collections/Authors/${name}`
}
export default paths