
let gbId, gbLabel
let ar, armax, armin, aridIndex, artitle, arlabel, arcmmtcnt, promote5, promote10
let arPositive, arView, arRating
let positive_genre, view_genre, rating_people_genre
let first_positive_5, second_view_1, third_rating_people_5
let first_positive_5_1, second_view_1_1, third_rating_people_5_1
let first_positive_5_genre, second_view_1_genre, third_rating_people_5_genre
let arPositiveTotal, arViewTotal, arRatingTotal
let arPosKeyword1, arPosKeyword2, arPosKeyword3
let arNegKeyword1, arNegKeyword2, arNegKeyword3
let maxindex3, maxindex4, maxindex5, maxindex6
let minindex3, minindex4, minindex5, minindex6
let comments1, comments2, comments3, thumb, item_thumb
let comment_target1, comment_target2, comment_target3

// labels 
const dataLabel = ['id', 'title', '5th', '10th', 
    'first_positive_5', 'second_view_1','third_rating_people_5', 
    'first_positive_5_1', 'second_view_1_1',
    'third_rating_people_5_1', 'first_positive_5_episode',
    'second_view_1_episode', 'third_rating_people_5_episode', 'positive',
    'view', 'rating_people', 'positive_1', 'view_1', 'rating_people_1',
    'positive_episode', 'view_episode', 'rating_people_episode',
    'comment_writer_count', 'comment_writer', 'pos_keyword_1',
    'pos_keyword_2', 'pos_keyword_3', 'neg_keyword_1', 'neg_keyword_2',
    'neg_keyword_3', 'label', 'first_positive_5_story',
    'second_view_1_story', 'third_rating_people_5_story', 'positive_story',
    'view_story', 'rating_people_story', 'first_positive_5_omnibus',
    'second_view_1_omnibus', 'third_rating_people_5_omnibus',
    'positive_omnibus', 'view_omnibus', 'rating_people_omnibus']

const userLabel = ['id', '제목', '5회차 기준 승격확률', '10회차 기준 승격확률', 
    '5회차 긍정댓글수', '1회차 조회수', '5회차 평점참여인원', 
    '정식승격 작품의 5회차 긍정댓글수 평균', '정식승격 작품의 1회차 조회수 평균','정식승격 작품의 5회차 평점참여인원 평균', 
    '동일 전개방식 작품의 5회차의 긍정댓글수','동일 전개방식 작품의 1회차의 조회수', '동일 전개방식 작품의 5회차의 평점참여인원', 
    '긍정댓글수', '조회수', '평점참여인원', 
    '정식승격 작품의 긍정댓글수 평균', '정식승격 작품의 조회수 평균', '정식승격 작품의 5회차 평점참여인원 평균',
    '동일 전개방식 작품의 긍정댓글수 평균', '동일 전개방식 작품의 조회수 평균', '동일 전개방식 작품의 평점참여인원 평균',
    '댓글수', '댓글 작성자', 
    '긍정 키워드1', '긍정 키워드2', '긍정 키워드3', 
    '부정 키워드1', '부정 키워드2', '부정 키워드3', 
    '승격여부', 
    'first_positive_5_story', 'second_view_1_story', 'third_rating_people_5_story', 
    'positive_story', 'view_story', 'rating_people_story', 
    'first_positive_5_omnibus', 'second_view_1_omnibus', 
    'third_rating_people_5_omnibus', 'positive_omnibus', 
    'view_omnibus', 'rating_people_omnibus']

let userlabelforchart = [[],[],[],[],
    ['5회차 긍정댓글수'], ['1회차 조회수'], ['5회차 평점참여인원'], 
    ['정식승격 작품의','5회차 긍정댓글수 평균'], ['정식승격 작품','1회차 조회수 평균'],['정식승격 작품의','5회차 평점참여인원 평균'], 
    ['동일 전개방식 작품의','5회차의 긍정댓글수'],['동일 전개방식 작품의','1회차의 조회수'], ['동일 전개방식 작품의','5회차의 평점참여인원'], 
    ['긍정댓글 수'], ['조회수'], ['평점참여인원'], 
    ['정식승격 작품의','긍정댓글수 평균'], ['정식승격 작품의','조회수 평균'], ['정식승격 작품의','5회차 평점참여인원 평균'],
    ['동일 전개방식 작품의','긍정댓글수 평균'], ['동일 전개방식 작품의','조회수 평균'], ['동일 전개방식 작품의','평점참여인원 평균']
]
const readCsv = (path) => {
    let arcnt = 0
    dfd.read_csv(path)
    .then(df => {
        eval('newdf'+' = df.groupby(["id"])')
        
        ar = df.values
        lastdataDf = newdf.get_groups([lastData]).values
        arcnt = Array.from({length:lastdataDf.length}, (v,i)=>i+1+'회')

        arids                         = Array.from(lastdataDf, x => x.at(0))
        artitle                       = Array.from(lastdataDf, x => x.at(2))
        promote5                      = Math.round(lastdataDf.at(0).at(4))
        promote10                     = Math.round(lastdataDf.at(0).at(3))
        promote5                      = Math.ceil(lastdataDf.at(0).at(4)*100)
        promote10                     = Math.ceil(lastdataDf.at(0).at(3)*100)
        
        first_positive_5              = Array.from(lastdataDf, x => x.at(5))
        second_view_1                 = Array.from(lastdataDf, x => x.at(6))
        third_rating_people_5         = Array.from(lastdataDf, x => x.at(7))

        first_positive_5_1            = Math.ceil(lastdataDf.at(0).at(8))
        second_view_1_1               = Math.ceil(lastdataDf.at(0).at(9))
        third_rating_people_5_1       = Math.ceil(lastdataDf.at(0).at(10))

        arPositive                    = Array.from(lastdataDf, x => Math.ceil(x.at(20)))
        arView                        = Array.from(lastdataDf, x => Math.ceil(x.at(21)))
        arRating                      = Array.from(lastdataDf, x => Math.ceil(x.at(22)))

        arPositiveTotal               = Array.from(lastdataDf, x => Math.ceil(x.at(23)))
        arViewTotal                   = Array.from(lastdataDf, x => Math.ceil(x.at(24)))
        arRatingTotal                 = Array.from(lastdataDf, x => Math.ceil(x.at(25)))

        itemlist = [
            first_positive_5_genre
            ,second_view_1_genre
            ,third_rating_people_5_genre
            ,positive_genre
            ,view_genre
            ,rating_people_genre]
        if (ar.at(0).at(3) === 'episode') {
            indexlinst = [11,12,13,26,27,28]
            
            for (var i=0; i < itemlist.legnth; i++){
                itemlist[i] = Math.ceil(lastdataDf.at(0).at(indexlinst[i]))
            }
        } else if (ar.at(0).at(3) === 'omnibus') {
            indexlinst = [14,15,16,29,30,31]

            for (var i=0; i < itemlist.legnth; i++){
                itemlist[i] = Math.ceil(lastdataDf.at(0).at(indexlinst[i]))
            }
        } else if (ar.at(0).at(3) === 'story') {
            indexlinst = [17,18,19,32,33,34]
            
            for (var i=0; i < itemlist.legnth; i++){
                itemlist[i] = Math.ceil(lastdataDf.at(0).at(indexlinst[i]))
            }
        }

        armax = new Array
        armin = new Array

        maxminElement = [
            first_positive_5
            ,second_view_1
            ,third_rating_people_5
            ,arPositive
            ,arView
            ,arRating
            ,arPositiveTotal
            ,arViewTotal
            ,arRatingTotal]

        maxminElement.forEach(e => {
            armax.push(Math.max.apply(null, e))
            armin.push(Math.min.apply(null, e))
        });
        
        for(let j=0;j<lastdataDf.length;j++){

            if (Math.ceil(lastdataDf.at(j).at(20)) === Math.ceil(armax.at(3))) {
                maxindex3 = j // max index
            } 
            if (Math.ceil(lastdataDf.at(j).at(21)) === Math.ceil(armax.at(4))) {
                maxindex4 = j // max index
            }
            if (Math.ceil(lastdataDf.at(j).at(22)) === Math.ceil(armax.at(5))) {
                maxindex5 = j // max index
            }
            
            if (Math.ceil(lastdataDf.at(j).at(20)) === Math.ceil(armin.at(3))) {
                minindex3 = j // max index
            } 
            if (Math.ceil(lastdataDf.at(j).at(21)) === Math.ceil(armin.at(4))){
                minindex4 = j // max index
            }
            if (Math.ceil(lastdataDf.at(j).at(22)) === Math.ceil(armin.at(5))){
                minindex5 = j // max index
            }
        }
        
    }).then(function(){
        if (document.getElementsByClassName('summary_wrap').length > 0) {
            item_thumb = document.getElementById('wtthumb')
            comment_target1 = document.getElementById('promote')
            comment_target2 = document.getElementById('wttitle')
            thumb += '<img src="' + lastSrc + '">'
            comments1 = promote5
            comments2 = artitle.at(0)
            item_thumb.innerHTML = thumb
            comment_target1.innerHTML = comments1
            comment_target2.innerHTML = comments2
        }
    }).then(function(){
        if (document.getElementsByClassName('summary_wrap').length > 0) {
            commentsSummary('score1','state1','part1',3,6,13,'개')
            commentsSummary('score2','state2','part2',4,7,14,'회')
            commentsSummary('score3','state3','part3',5,8,15,'명')
        }
    }).then(function(){
        if (document.getElementsByClassName('detail_wrap').length > 0) {
            commentsDetail('data7_analysis','data7_title',3,6,'개')
            commentsDetail('data5_analysis','data5_title',4,7,'회')
            commentsDetail('data6_analysis','data6_title',5,8,'명')
        }
    }).then(function() {
        
        let circleSize = 10
        let pointRadius3 = Array.from({length:lastdataDf.length}, (i)=>3)
        let pointRadius4 = Array.from({length:lastdataDf.length}, (i)=>3)
        let pointRadius5 = Array.from({length:lastdataDf.length}, (i)=>3)

        pointRadius3 = pointRadius3.fill(circleSize,maxindex3,maxindex3+1)
        pointRadius4 = pointRadius4.fill(circleSize,maxindex4,maxindex4+1)
        pointRadius5 = pointRadius5.fill(circleSize,maxindex5,maxindex5+1)

        pointRadius3 = pointRadius3.fill(circleSize,minindex3,minindex3+1)
        pointRadius4 = pointRadius4.fill(circleSize,minindex4,minindex4+1)
        pointRadius5 = pointRadius5.fill(circleSize,minindex5,minindex5+1)
        
        // styling 
        const bgcolor = ['#00d364', '#e9e9e9','#008000', '#ff0000','#fff000']
        let bgcolorOpacity3 = Array.from({length:lastdataDf.length}, (i)=>bgcolor.at(0))
        bgcolorOpacity3 = bgcolorOpacity3.fill(bgcolor.at(0)+'50',maxindex3,maxindex3+1)
        bgcolorOpacity3 = bgcolorOpacity3.fill(bgcolor.at(0)+'50',minindex3,minindex3+1)

        let bgcolorOpacity4 = Array.from({length:lastdataDf.length}, (i)=>bgcolor.at(3))
        bgcolorOpacity4 = bgcolorOpacity4.fill(bgcolor.at(3)+'50',maxindex4,maxindex4+1)
        bgcolorOpacity4 = bgcolorOpacity4.fill(bgcolor.at(3)+'50',minindex4,minindex4+1)

        let bgcolorOpacity5 = Array.from({length:lastdataDf.length}, (i)=>bgcolor.at(2))
        bgcolorOpacity5 = bgcolorOpacity5.fill(bgcolor.at(2)+'50',maxindex5,maxindex5+1)
        bgcolorOpacity5 = bgcolorOpacity5.fill(bgcolor.at(2)+'50',minindex5,minindex5+1)

        let bgcolorOpacity6 = Array.from({length:lastdataDf.length}, (i)=>bgcolor.at(4))
        bgcolorOpacity6 = bgcolorOpacity6.fill(bgcolor.at(4)+'50',maxindex6,maxindex6+1)
        bgcolorOpacity6 = bgcolorOpacity6.fill(bgcolor.at(4)+'50',minindex6,minindex6+1)

        if (document.getElementsByClassName('summary_wrap').length > 0) {
            const ctx1 = document.getElementById('myChart1');
            const ctx2 = document.getElementById('myChart2');
            const ctx3 = document.getElementById('myChart3');
            
            const data1 = {
                labels: [userlabelforchart[4],userlabelforchart[7],userlabelforchart[10]],
                datasets: [
                    {
                        data: [first_positive_5[0], first_positive_5_1, first_positive_5_genre],
                        borderColor: bgcolor.at(1),
                        backgroundColor: [bgcolor.at(0), bgcolor.at(1), bgcolor.at(1)],
                        pointRadius: pointRadius3,
                        pointHoverRadius: 15
                    }
                ]
            }

            const data2 = {
                labels: [userlabelforchart[5],userlabelforchart[8],userlabelforchart[11]],
                datasets: [
                    {
                        data: [second_view_1[0], second_view_1_1, second_view_1_genre],
                        borderColor: bgcolor.at(1),
                        backgroundColor: [bgcolor.at(0), bgcolor.at(1), bgcolor.at(1)],
                        pointRadius: pointRadius4,
                        pointHoverRadius: 15
                    },
                ]
            }

            const data3 = {
                labels: [userlabelforchart[6],userlabelforchart[9],userlabelforchart[12]],
                datasets: [
                    {
                        data: [third_rating_people_5[0], third_rating_people_5_1, third_rating_people_5_genre],
                        borderColor: bgcolor.at(1),
                        backgroundColor: [bgcolor.at(0), bgcolor.at(1), bgcolor.at(1)],
                        pointRadius: pointRadius4,
                        pointHoverRadius: 15
                    },
                ]
            }
            
            new Chart(ctx1, {
                type: 'bar',
                data: data1,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

            new Chart(ctx2, {
                type: 'bar',
                data: data2,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

            new Chart(ctx3, {
                type: 'bar',
                data: data3,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

        } 
        else {
            const ctx4 = document.getElementById('myChart4');
            const ctx5 = document.getElementById('myChart5');
            const ctx6 = document.getElementById('myChart6');

            const data4 = {
                labels: arcnt,
                datasets: [
                    {
                        label: userLabel[13],
                        data: arPositive,
                        borderColor: bgcolor.at(0),
                        backgroundColor: bgcolorOpacity3,
                        pointRadius: pointRadius3,
                        pointHoverRadius: 15
                    },
                    {
                        label: userLabel[16],
                        data: arPositiveTotal,
                        borderColor: 'lightgray',
                        backgroundColor: 'lightgray',
                        pointRadius: 2,
                        pointHoverRadius: 15
                    }
                ]
            }
    
            const data5 = {
                labels: arcnt,
                datasets: [
                    {
                        label: userLabel[14],
                        data: arView,
                        borderColor: bgcolor.at(3),
                        backgroundColor: bgcolorOpacity4,
                        pointRadius: pointRadius4,
                        pointHoverRadius: 15
                    },
                    {
                        label: userLabel[17],
                        data: arViewTotal,
                        borderColor: 'lightgray',
                        backgroundColor: 'lightgray',
                        pointRadius: 2,
                        pointHoverRadius: 15
                    }
                ]
            }
    
            const data6 = {
                labels: arcnt,
                datasets: [
                    {
                        label: userLabel[15],
                        data: arRating,
                        borderColor: bgcolor.at(4),
                        backgroundColor: bgcolorOpacity6,
                        pointRadius: pointRadius5,
                        pointHoverRadius: 15
                    },
                    {
                        label: userLabel[18],
                        data: arRatingTotal,
                        borderColor: 'lightgray',
                        backgroundColor: 'lightgray',
                        pointRadius: 1,
                        pointHoverRadius: 15
                    }
                ]
            }

            new Chart(ctx4, {
                type: 'line',
                data: data4,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true
                            }
                        }
                    }
                }
            });
    
            new Chart(ctx5, {
                type: 'line',
                data: data5,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true
                            }
                        }
                    }
                }
            });
    
            new Chart(ctx6, {
                type: 'line',
                data: data6,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true
                            }
                        }
                    }
                }
            });
        }

    }).catch(err => {
        console.log(err);
    })
}


// 서머리에서 웹툰 코멘트
const commentsSummary = (comTarget1, comTarget2, comTarget3, wtIndx, totalIndex, labelIndex, unit) => {
    comment_target1 = document.getElementById(comTarget1)
    comment_target2 = document.getElementById(comTarget2)
    comment_target3 = document.getElementById(comTarget3)
    comment_target3.innerHTML = userLabel.at(labelIndex)

    if ((((Math.round(armax.at(totalIndex)) - Math.round(armax.at(wtIndx))) * 100)/100)<0) {
        comment_target1.innerHTML = '다른 작품보다 '+ (((Math.round(armax.at(wtIndx)) - Math.round(armax.at(totalIndex))) * 100)/100).toLocaleString()
        comment_target2.innerHTML = unit +' <em class="high">많아요!</em>'
    } else {
        comment_target1.innerHTML = '다른 작품보다 '+ (((Math.round(armax.at(totalIndex)) - Math.round(armax.at(wtIndx))) * 100)/100).toLocaleString()
        comment_target2.innerHTML = unit + ' <em class="low">적어요.</em>'
    }
}

// 디테일에서 웹툰 코멘트
const commentsDetail = (comTarget1, comTarget2, wtIndx, totalIndex, unit) => {
    comment_target1 = document.getElementById(comTarget1)
    comment_target2 = document.getElementById(comTarget2)

    comments1 = ''
    comments2 = ''
    comments3 = ''

    comments1 += '<div class="item"><span>[' + artitle[0] +'] ' + userLabel.at(10+wtIndx) + '</span><span class="count">'
    comments1 += ((Math.round(armax.at(wtIndx)) * 100)/100).toLocaleString() + unit + '</em></span></div>'

    comments3 += '<div class="item"><span>' + userLabel.at(10+totalIndex)  + '</span><span class="count">'
    comments3 += ((Math.round(armax.at(totalIndex)) * 100)/100).toLocaleString() + unit +'</em></span></div>'

    if ((((Math.round(armax.at(totalIndex)) - Math.round(armax.at(wtIndx))) * 100)/100)<0) {
        comments2 += '<div>최고 '+ userLabel.at(10+wtIndx) + ' 기준 정식연재된 작품과 비교해 ' + '<em class="' + 'high' + '">' + (((Math.round(armax.at(wtIndx)) - Math.round(armax.at(totalIndex))) * 100)/100).toLocaleString() + unit +'</em> 많아요!</div>'
    } else {
        comments2 += '<div>최고 '+ userLabel.at(10+wtIndx) + ' 기준 정식연재된 작품과 비교해 ' + '<em class="' + 'low' + '">' + (((Math.round(armax.at(totalIndex)) - Math.round(armax.at(wtIndx))) * 100)/100).toLocaleString() + unit + '</em> 적어요.</div>'
    }

    comments3 += comments1
    comment_target1.innerHTML = comments3
    comment_target2.innerHTML = comments2
}