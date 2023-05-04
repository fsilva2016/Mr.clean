// add menu mobile
// $('.header_menu').click(function() {
//         $('.header_menu ul').toggleClass('active')
//     })

const videos = document.querySelector('.videos ');
const impermeabilizacao = document.querySelector('.impermeabilizacao ');
const urlInstagran = 'SUdRVkpYWkFsODVTbGxWTlZaQW9Vek16WTBWMmJuaGtORzlmWkFFMXJaQUd4cE5teExNbDl3U0RaQXJiRU4wT1dkTVlTMVpBY1dkbWEyVldaQWxsaGFUbGlhakZJY21WWVRITlNaQWpGcFdHZFpBTlc5WGFGRlljV2RqYm5OUFpBV0ZmYW5FMFEzVnRaQVRZeFMwaDZUVEEyTVhGc2QzZGpVQVpEWkQ=';
const atualizarPost = document.querySelector('.atualizarPost');
const banner = document.querySelectorAll('.banner');
const body = document.querySelector('.body');
const ano = document.querySelector('.ano');
const data = new Date();
const token = atob(urlInstagran);
const url = ` https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`;
const menu = document.querySelector('.menuTop');
const div = document.createElement('div')

ano.innerHTML = data.getFullYear();
atualizarPost.setAttribute('src', `${url}`);

const feed = new Instafeed({
    accessToken: `${token}`,
    limit: 20,
    template: `<div class='item'><a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a></div>`,
    after: function() {
        $('.posts').slick(carousel());
    }
});

feed.run();

const carousel = () => {
    return {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    }

}

const videosLavagem = () => {
    for (let i = 1; i < 6; i++) {
        videos.innerHTML += `
                <div class="postVideo"><video src="assets/videos/lavagem/video${i}.mp4"   controls muted="muted"  controlslist="nodownload"></video></div>
            `
    }
}
const videosImpermeabilizacao = () => {
    for (let i = 0; i < 6; i++) {
        impermeabilizacao.innerHTML += `
                <div class="postVideo"><video src="assets/videos/imper/video${i}.mp4"  controls muted="muted"  controlslist="nodownload"></video></div>
            `
    }
}


const slide = () => {
    $('.videos').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    });
    $('.impermeabilizacao').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    })
}



const listBanners = (item, index, array) => {
    //pega a posição do array 
    const arrayId = array[index];
    // pega largura do elemento da esquerda 
    const widthLeft = item.offsetLeft;
    // aplica o evento para cada item do array
    item.addEventListener('mousemove', e => {
        //calculo pega o valor do mouse menos a media la lateral do elemento
        const width = `${(e.clientX - widthLeft)}px`
            // aplica css
        arrayId.children[0].style.width = width;
        arrayId.children[1].style.marginLeft = width;
    })
}
banner.forEach(listBanners)

videosLavagem();
videosImpermeabilizacao();
slide();

console.log(menu.innerHTML)

if (window.innerWidth === 1024) {


}