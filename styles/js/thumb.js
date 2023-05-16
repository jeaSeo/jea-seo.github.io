
// main
let ar
let dataLabel = ['id','title','thumbnail']
let userLabel = ['id','제목','섬네일']
const readCsvThumb = (path) => {
    let arcnt = 0
    dfd.read_csv(path)
    .then(df => {
        ar = df.values
    }).then(function(){
        let ids, titles, thumbnails
        ids = Array.from(ar, x => x.at(0))
        titles = Array.from(ar, x => x.at(1))
        thumbnails = Array.from(ar, x => x.at(2))

        let finditemindex = new Array
        const fileredlist = titles.filter(function(t){
            let idx = String(t).indexOf(lastData)
            if (idx > -1) {
                finditemindex.push(titles.indexOf(t))
            }
        })

        let newids = new Array
        let newtitles = new Array
        let newthumbnails = new Array
        for (var j=0;j<finditemindex.length;j++){
            let n = finditemindex[j]
            newids.push(ids[n])
            newtitles.push(titles[n])
            newthumbnails.push(thumbnails[n])
        }

        const addElement= (j) =>{
            let item = document.createElement('div')
            item.className = 'item'

            let anchor = document.createElement('a')
            anchor.id = 'id_'+newids.at(j)
            anchor.className = 'item_anchor'
            item.href = "javascript:void(0);"

            let thumb = document.createElement('img')
            thumb.src = newthumbnails.at(j)

            let title = document.createElement('div')
            title.className = 'title'

            let titlecontent = document.createTextNode(newtitles.at(j))

            const itemlist = document.getElementById('result_list')
            item.appendChild(thumb)
            item.appendChild(title)
            title.appendChild(titlecontent)
            item.appendChild(anchor)
            itemlist.appendChild(item)
        }

        const nothing = () => {
            let content = ''
            content += '<div class="nodata"><p class="f2">이런! 아무것도 없습니다!</p><a class="goback" href="../index.html">메인으로 돌아가기</a></div>'
            document.body.innerHTML = content
        }

        let k = 0
        if (finditemindex.length === 0){
            nothing()
        } else {
            while (k < finditemindex.length) {
                var addTimeout = setInterval(addElement(k), 3000);
                k++
            }
        }
        let resultTarget1 = document.getElementById('resultKeyword')
        let resultTarget2 = document.getElementById('resultCount')
        let result1 = lastData
        let result2 = finditemindex.length

        resultTarget1.innerHTML = result1
        resultTarget2.innerHTML = result2

    }).catch(err => {
        console.log(err);
    })
}

const hrefLink = () => {
    location.href = targetLink
}




