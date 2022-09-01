"use strict";

/*determine the type of device*/
window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

/*touch || pc*/
if(mobileAndTabletCheck()){
    document.body.classList.add('_touch');
    }else{
    document.body.classList.add('_pc');
}

/*hamburger menu*/
let iconMenu = document.querySelector(".icon-menu");
if(iconMenu != null){
    let body = document.querySelector("body");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", (e) =>{
        if(iconMenu){
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        }
    })
}

/*const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
        iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}*/

/*user-header__icon*/
let user_icon = document.querySelector(".user-header__icon");
user_icon.addEventListener("click", function(){
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('_active');
});

/*scrolling when clicked*/
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            if(iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

/*close user-header__menu*/
document.documentElement.addEventListener("click", function(e){
    if(!e.target.closest('.user-header')){
        let user_menu = document.querySelector('.user-header__menu');
        user_menu.classList.remove('_active')
    }
});

/*Dynamic adaptive-2*/
(function(){
    let original_positions = [];
    let da_elements = document.querySelectorAll('[data-da]');
    let da_elements_array = [];
    let da_match_media = [];
    //filling in arrays
    if(da_elements.length > 0){
        let number = 0;
        for(let index = 0; index < da_elements.length; index++){
            const da_element = da_elements[index];
            const da_move = da_element.getAttribute('data_da');
            const da_array = da_move.split(',');
            if(da_array.length === 3){
                da_element.setAttribute('data_da_index', number);
                //filling in the array of initial positions
                original_positions[number] = {
                    "parent": da_element.parentNode,
                    "index": index_in_parent(da_element)
                };
                //filling in the array of elements
                da_elements_array[number] = {
                    "element": da_element,
                    "destination": document.querySelector('.' + da_array[0].trim()),
                    "place": da_array[1].trim()
                }
                number++;
            }
        }
        dynamic_adapt_sort(da_elements_array);
        //creating events at the breakpoint
        for (let index = 0; index < da_elements_array.length; index++){
            const el = da_elements_array[index];
            const da_breakpoint = el.breakpoint;
            const da_type = "max"; //for MobileFirst change to "min"
            da_match_media.push(window.matchMedia("(" + da_type + "-width: " + da_breakpoint + "px)"));
            da_match_media[index].addListener(dynamic_adapt);
        }
    }
    //main function
    function dynamic_adapt(e){
        for (let index = 0; index < da_elements_array.length; index++){
            const el = da_elements_array[index];
            const da_element = el.element;
            const da_destination = el.destination;
            const da_place = el.place;
            const da_breakpoint = el.breakpoint;
            const da_classname = "_dynamic_adapt_" + da_breakpoint;
            if(da_match_media[index].matches){
                //moving the elements
                if(!da_element.classList.contains(da_classname)){
                    let actual_index;
                    if(da_place == 'first'){
                        actual_index = index_of_elements(da_destination)[0];
                    }else if(da_place == 'last'){
                        actual_index = index_of_elements(da_destination)[index_of_elements(da_destination).length];
                    }else{
                        actual_index = index_of_elements(da_destination)[da_place]
                    }
                    da_destination.insertBefore(da_element, da_destination.children[actual_index]);
                    da_element.classList.add(da_classname);
                }
            }else{
                //returned to the place
                if(da_element.classList.contains(da_classname)){
                    dynamic_adapt_back(da_element);
                    da_element.classList.remove(da_classname);
                }
            }
        }
        custom_adapt();
    }
    //calling the main function
    dynamic_adapt();
    //return to place function
    function dynamic_adapt_back(el){
        const da_index = el.getAttribute('data_da_index');
        const original_place = original_positions[da_index];
        const parent_place = original_place['parent'];
        const index_place = original_place['index'];
        const actual_index = index_of_elements(parent_place, true)[index_place];
        parent_place.insertBefore(el, parent_place.children[actual_index]);
    }
    //the function of getting the index inside the parent
    function index_in_parent(el){
        var children = Array.prototype.slice.call(el.parentNode.children);
        return children.indexOf(el);
    }
    //function for getting an array of indexes of elements inside the parent
    function index_of_elements(parent, back){
        const children = parent.children;
        const children_array = [];
        for(let i = 0; i < children.length; i++){
            const children_element = children[i];
            if(back){
                children_array.push(i);
            }else{
                //excluding the transferred element
                if(children_element.getAttribute('data_da') == null){
                    children_array.push(i);
                }
            }
        }
        return children_array;
    }
    //sorting an object
    function dynamic_adapt_sort(arr){
        arr.sort(function(a, b){
            if(a.breakpoint > b.breakpoint) {return -1} else {return 1}
            //for MobileFirst change
        });
        arr.sort(function(a, b){
            if(a.place > b.place) {return 1} else {return -1}
        });
    }
    //additional adaptation scenarios
    function custom_adapt(){
        const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    // listening to the screen size change
    window.addEventListener("resize", function(event){})
})