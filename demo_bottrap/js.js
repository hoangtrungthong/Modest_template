// // // // // // //  var name = ["thong", "kahnh","nam" ];

// // // // // // // name.forEach(user => {
// // // // // // //      console.log("xin chao" + user)
// // // // // // //  });

// // // // // // //  var number = [10,11,12,13,14,15];
// // // // // // // //  var sochan = number.filter(abc => number %2 == 0);
// // // // // // // //  console.log(sochan);
// // // // // // // // var tong = number.reduce( function( sumaries , num){
// // // // // // // //     return sumaries + num;
// // // // // // // // },0);
// // // // // // // // var sochan = number.some( n=> n%2 == 0)
// // // // // // // var sole = number.every( function(n){
// // // // // // //     return n %2 !=0
// // // // // // // })
// // // // // // // console.log(sole);

// // // // // // // try
// // // // // // // {
// // // // // // //     throw({
// // // // // // //         message: "co loi"
// // // // // // //     })
// // // // // // // }
// // // // // // // catch(thongbao){
// // // // // // //     console.log(thongbao);
// // // // // // // }
// // // // // // // var div = document.getElementById('abc');
// // // // // // // div.style.backgroundColor = 'red';
// // // // // // // console.log(div.style);

// // // // // // // var div = document.getElementsByTagName('div')
// // // // // // // console.log(div);
// // // // // // // var div = document.querySelector('.a');
// // // // // // // console.log(div)

// // // // // // // var div = document.createElement('div')

// // // // // // // p.

// // // // // // // console.log(div)

// // // // // // // var c = document.getElementById('a');
// // // // // // // // dat thuoc tinh
// // // // // // // a.setAttribute ('d', 'e');
// // // // // // // console.log(c.attributes)
// // // // // // // // lay ra thuoc tinh
// // // // // // // console.log(c.getAttribute('d'))

// // // // // // // var cacdiv = document.getElementsByTagName('div')
// // // // // // // console.log(cacdiv);
// // // // // // // for ( var i=0 ; i < cacdiv.length;i++)
// // // // // // // {
// // // // // // //     console.log(cacdiv[i])
// // // // // // // }
// // // // // // //quan li class
// // // // // // var div1 = document.getElementById('a');
// // // // // // div1.classList.add('them1');
// // // // // // div1.classList.add.('them2');
// // // // // // div1.classList.remove('them2');

// // // // // // console.log(div1.classList);
// // // // // // //ktra xem co ko

// // // // // // console.log(div1.classList.contains('them1'));

// // // // // var btn = document.getElementById('btn')

// // // // // btn.addEventListener('click', function(event){
// // // // //     event.stopPropagation();
// // // // //     console.log('click  .....')
// // // // // })

// // // // // // var ong = document.getElementById('ong')
// // // // // // ong.preventDefault('click', function(e){
// // // // // //     // e.stopPropagation();
// // // // // //     console.log('ong ....')
// // // // // // })

// // // // // var btns = document.getElementsByClassName ('btn');

// // // // // btns.forEach(button => {
// // // // //     button.addEventListener('click', function(event){
// // // // //         event.stopPropagation();
// // // // //         console.log('abc')
// // // // //     })
// // // // // });
// // // // // var btns = document.getElementById('btn');
// // // // // document.addEventListener('DOMContentLoaded', function(e){
// // // // //     console.log('tai xong')
// // // // // })

// // // // var img = document.getElementById('aa');
// // // // var aaa = document.getElementById('a');
// // // // img.addEventListener('load' , function(e){
// // // //     aaa.style.display= 'none';
// // // //     btns.style.display = 'block'
// // // // })

// // // //var btn = document.getElementById('a');

// // // // var img = document.createElement('img');

// // // // img.onload = function(){
// // // //     document.body.appendChild(img);
// // // // }

// // // // var inp = document.getElementById('inp');
// // // //  inp.addEventListener('change',function(e){
// // // //      console.log('du lieu da thay doi')
// // // //  })

var dropdown = document.querySelectorAll('.dropdown > a');
dropdown.forEach( button =>{
dropdown.addEventListener('click',function(e){
    e.prevenDefault();
    let state = this.getAttribute('open');
    console.log(typeof state);
    if(state){
        this.removeAttribute('open')
    }
    else{
        this.setAttribute('open', true);
    }
// // // // })
// // // // })

// // // var name = 'thong';
// // // var fullname = 'hoang trung ' + name;

// // // console.log(fullname)

// var people = ['thong' , 'kahnh' , 'nam'];
// people.forEach( peoples => {
//     console.log('ban la' + ('\t') + peoples)
// });
//  var message = people.map(function(name){
//      return 'ban la' + name;
//  })
//   console.log(message);
 