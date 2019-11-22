// (function($) {
'use strict';

    // function showValue() {

    // }

    function keyCon() {
        $("#m-btn button").click(function() {
            
            if($("#new-in-2 input").val().length != 0) {
                $("#payment-1 .payment-item-details").hide();
                $("#req-2").hide();
                $("#payment-1").find(".payment-num").hide();
                $("#payment-1").find(".payment-check").show().parent().addClass("green-bg");
                $("#payment-2 .payment-item-details").show();
            }
            else {
                $("#req-2").show();
            }
        });
    }

    function authCon() {
        $(".new-auth-input-bx-1").keypress(function(e) {
            if(e.which == 13) {
                if($(".new-auth-input-bx-1").val().length != 0) {
                    $("input#new-auth-i").focus();
                    alert("pranto")
                }
            }
        });
    }

    function prantoCon() {
        if($(".new-auth-input-bx-1").val() != 0) {
            $("#req-4").hide();
            
        }

        else {
            $("#req-4").show();
        }

        if($(".new-auth-input-bx-2").val() != 0) {
            $("#req-5").hide();
            
        }

        else {
            $("#req-5").show();
        }
    }

    function catContainer() {
        var $window = $(window);
        var windowWidth = $window.width();

        if(windowWidth < 1250) {
            $(".move-sec").appendTo(".main-section-abs");
        }

        if(windowWidth < 500) {
            $("li.navi-move").appendTo(".mobile-box ul");

            $("li.navi-move").attr("data-res", "2");

            $(".prop-dropdown").appendTo(".category-section-f-2");

            $(".category-section-f-2").hide();
            $(".mobile-box ul li a").click(function(e) {
                e.preventDefault();
            })
            $(".mobile-box ul li").click(function() {
                var self = $(this);
                var self_attr = self.attr("data-res");
                $(".category-section-f[data-res-details="+self_attr+"]").show().siblings(".category-section-f").hide();
            });

            

            var text = $(".prop-dropdown li:first-child a").text();
            text = text.split(' ').slice(1).join(' ')
            $(".navi-move span").text(text);

            if($(".navi-move span").text() != 0) {
                $(".prop-dropdown li:first-child").hide();
                // $(".navi-move a span").text().show();
            }
        }

        if(windowWidth < 1250) {
            $(".cart-full-box").appendTo(".modal-full-wrapper");
            $(".cart-full-box").addClass("new-cart-full-box");
        }

    
       
    };

    $(document).ready(function() {

        $(".nav-search-icon-inner button").click(function(e) {
            e.preventDefault();
        });

        // $(window).trigger('resize');

        $(".nav-category-menu").click(function() {
            $(this).toggleClass("active");
            $(".main-section-abs").toggleClass("active");
            $(this).parent().parent().parent().parent().parent().parent("html").toggleClass("new-modal-open");

            if($(".main-section-abs").hasClass("active")) {
                $(".category-owl-slider").css({"z-index": "0"})
            }

            else {
                $(".category-owl-slider").css({"z-index": "1"})
            }
        });
        

        // header slider

       var owl =  $('.header-owl-carousel.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            nav: true,
			navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
            ],
            dots: true,
            dotsContainer: '#custom-dots',
        });

        $('#custom-dots .owl-dot').click(function(e){
            // alert("hi");
            owl.trigger('to.owl.carousel', [$(this).index(), 3000]);
        });

        // cart pop up

        // $(".new-modal-wrapper .cart-full-box").addClass("eve-close-modal");

        $(".new-cart-list a").click(function(e) {
            e.preventDefault();
            $(".modal-full-wrapper").addClass("active");
            $(".new-cart-full-box").addClass("active");
            $("html").addClass("modal-open");
        });

        $(".new-delivery-icon img").click(function() {
            $(".modal-full-wrapper").removeClass("active");
            $("html").removeClass("modal-open");
            $(".new-cart-full-box").removeClass("active");
        });

        $(".cart-list a").click(function(e) {
            e.preventDefault();
            $(".modal-full-wrapper").addClass("active");
            $(".cart-modal").addClass("active");
            $("html").addClass("modal-open");
        });

        $(".cart-modal-icon").click(function() {
            $(".modal-full-wrapper").removeClass("active");
            $(".cart-modal").removeClass("active");
            $("html").removeClass("modal-open");
        });

        $(".delivery-title-icon").click(function() {
            $(".delivery-full-wrapper").removeClass("active");
            $("html").removeClass("modal-open");
        });

        // $(document).mouseup(function(e){ 

        //     var delivery_container = $(".delivery-modal");
        
        //     // If the target of the click isn't the container
        //     if(!delivery_container.is(e.target) && delivery_container.has(e.target).length === 0){
        //         delivery_container.removeClass("active");
        //         delivery_container.parent(".delivery-full-wrapper").removeClass("active");
        //         $("html").removeClass("modal-open");
        //     }
        // });

        // $(document).mouseup(function(e){
        //     var auth_container = $(".authentication-modal");
        //     var cart_container = $(".cart-modal");
        
        //         // If the target of the click isn't the container
        //     if((!((auth_container)||(cart_container)).is(e.target) || ((auth_container)&&(cart_container)).has(e.target).length === 0) ){
        //         // auth_container.removeClass("active");
        //         auth_container.parent(".authentication-full-wrapper").removeClass("active");
        //         auth_container.parent().parent().parent("html").removeClass("modal-open");

                
        //     }
        // });

        $(document).mouseup(function(e){
            var cart_container = $(".eve-close-modal");
        
            // If the target of the click isn't the container
            if((!cart_container.is(e.target) && cart_container.has(e.target).length === 0)){
                cart_container.removeClass("active");
                cart_container.parent(".wrapper-close").removeClass("active");
                cart_container.parent().parent().parent("html").removeClass("modal-open");
            }

            
        });

        // category-menu dropdown

        $(".category-section-dropdown").hide();
        $(".category-toggle-icon").click(function(e) {
            e.preventDefault();
            $(this).toggleClass("in").parent("a").toggleClass("self-add").next(".category-section-dropdown").fadeToggle("slow", "linear").toggleClass("in");
            $(this).parent().parent("li").toggleClass("self-new-bg");
        });


        // category slider

        if($(".category-owl-slider.owl-carousel .item").length >7) {
            $('.category-owl-slider.owl-carousel').owlCarousel({
                items: 6,
                stagePadding: 50,
                loop: false,
                margin: 10,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                autoplay: false,
                autoplayTimeout: 3000,
                autoplayHoverPause: false,
                nav: true,
                navText: [
                "<i class='fas fa-chevron-left'></i>",
                "<i class='fas fa-chevron-right'></i>"
                ],
                dots: false,

                responsive: {

                    0: {
                        items: 2
                    },

                    600: {
                        items: 3
                    }, 

                    900: {
                        items: 5
                    },

                    1200: {
                        items: 6
                    }
                }
            });
        }

        else {
            $(".category-owl-slider").addClass("flex-box");
        }

        // big figure 

        // $(".figure-big").parent("a").css({"padding-top": "0",});

        // $(".category-owl-slider .owl-prev").hide();
        // $(".category-owl-slider .owl-next").click(function() {
        //     $(".category-owl-slider .owl-prev").show();
        // })

        // if((".category-owl-slider .owl-item").last().hasClass("active")) {
        //     $(".category-owl-slider .owl-next").hide();
        // }

        // card image change

        $(".box-change-img").each(function() {
            var $change_img = $(this).find("ul").find("li"), i = 0;

            function changeImage(){
                var next = (++i % $change_img.length);
                $($change_img.get(next - 1)).fadeOut(500);
                $($change_img.get(next)).fadeIn(500);
            }
            var new_interval = setInterval(changeImage, 2000);
        });


        // modal-validation

        $(".m-btn-2").click(function() {

            if($(".auth-new-input-1").val() >0) {
                $("#req-3").hide();
                
                $(this).addClass("new-button-2")
                
               $(".auth-modal-input-new").show(function (e) {
                $("#req-4").hide();
                $("#req-5").hide();
                if($(".new-auth-input-bx").val().length != 0) {
                    $("#req-4").hide();
                    $("#req-5").hide();
                    $("html").removeClass("modal-open");
                    history.go(0);
                    $(".authentication-full-wrapper").removeClass("active");
                }
    
                else {
    
                    prantoCon();
    
                }
               }); 
            }

            else {
                $("#req-3").show();
            }
        });

        // $(".m-btn-2.new-button-2 button").click(function() {

        //     if($(".new-auth-input-bx").val().length != 0) {
        //         $("#req-4").hide();
        //         $("#req-5").hide();
        //         alert("m")
        //     }

        //     else {

        //         prantoCon();

        //     }

            
        // });

        

        $(".modal-details-2").hide();
        $(".connect-login a").click(function(e) {
            e.preventDefault();
            $(".modal-details-1").hide();
            $(".modal-details-2").show();
            // $(".auth-new-input-1").focus();
        });

        // $("#req-3").hide();
        $(".auth-modal-input-new").hide();
        
        // $(".m-btn-2").click(function () {
        //     if($(".auth-new-input-1").val().length != 0) {
        //         $(".auth-modal-input-new").show();
        //         $(".new-auth-input-bx-1").focus();

        //         authCon();

        //     }
        // });
        // $(".modal-details-number").mouseup(function() {
        //     $(".m-btn-2 button").click(function() {
        //         if($(".auth-new-input-1").val().length != 0) {
        //             $(".auth-modal-input-new").show(function() {
        //                 $(".new-auth-input-bx-1").focus();
        //                 // $(".new-auth-input-bx-1").keypress(function(e) {
        //                 //     if(e.which == 13) {
        //                 //         if($(".new-auth-input-bx-2").val().length != 0) {
        //                 //             $(".m-btn-2 button").click(function (e) {
        //                 //                 alert("success pranto");
        //                 //             });
        //                 //         }
        //                 //     }
        //                 // });
        //                 // $(this).find("input").focus();
        //                 // authCon();
                        
        //             });

        //             $("#req-3").hide();
        //         }

        //         else {
        //             $("#req-3").show();
        //         }
        //     });
        // });

        $(".auth-new-input-1").keypress(function(e) {
            if(e.which == 13) {
                var new_btn = $(".m-btn-2 button");
                if($(".auth-new-input-1").val().length != 0) {
                    $(".auth-modal-input-new").show();
                    new_btn.addClass("m-new-btn");
                    $("#req-3").hide();
                    
                    if($(".new-auth-input-bx").val().length != 0) {
                        $(".m-btn-2 button").click(function() {
                            alert("puja sc");
                            $(".req-b").hide();
                        });
                    }

                    else {

                        if($(".new-auth-input-bx-1").val().length == 0) {
                            $(".m-btn-2 button").click(function() {
                                $(".req-4").show();
                            });
                        }
                        else {
                            $(".m-btn-2 button").click(function() {
                                $(".req-4").hide();
                            });
                        }

                        if($(".new-auth-input-bx-2").val().length == 0) {
                            $(".m-btn-2 button").click(function() {
                                $(".req-5").show();
                            });
                        }
                        else {
                            $(".m-btn-2 button").click(function() {
                                $(".req-5").hide();
                            });
                        }
                    }

                    // $(".m-new-btn").click(function(pra) {
                    //     // alert("hi", pra);
                    //     if($(".new-auth-input-bx-1").val().length != 0) {
                    //         $("#req-4").hide();
                    //     }
                    //     else {
                    //         $("#req-4").show();
                    //     }
                    //     if($(".new-auth-input-bx-2").val().length != 0) {
                    //         $("#req-5").hide();
                    //     }
                    //     else {
                    //         $("#req-5").show();
                    //     }
                    // });
                    
                }

                else {
                    $("#req-3").show();
                }
            }
        });

        

        $(".new-auth-input-bx-2").keypress(function(e) {
            if(e.which == 13) {

                if($(".auth-new-input-1").val().length != 0) {
                    $("#req-3").hide();

                    if($(".new-auth-input-bx-1").val().length != 0) {
                        $("#req-4").show();
                    }

                    else {
                        $("#req-4").hide();
                    }

                    if($(".new-auth-input-bx-2").val().length != 0) {
                        $("#req-5").show();
                    }

                    else {
                        $("#req-5").hide();
                    }

                }

                else {

                    $("#req-3").show();

                    if($(".new-auth-input-bx-1").val().length != 0) {
                        $("#req-4").show();
                    }

                    else {
                        $("#req-4").hide();
                    }

                    if($(".new-auth-input-bx-2").val().length != 0) {
                        $("#req-5").show();
                    }

                    else {
                        $("#req-5").hide();
                    }
                }

                if($(".new-auth-input-bx-1").val().length != 0) {
                    $(".req-b").hide();

                    if($(".auth-new-input-1").val().length != 0) {
                        $("#req-3").hide();
                        if($(".new-auth-input-bx-2").val().length != 0) {
                            $("html").removeClass("modal-open");
                            history.go(0);
                            $(".authentication-full-wrapper").removeClass("active");
                            $("#req-5").hide();
                        }
    
                        else {
                            if($(".new-auth-input-bx-2").val().length == 0) {
                                $("#req-5").show();
                            }
                        }
                    }

                    else {
                        $("#req-3").show();

                        if($(".new-auth-input-bx-1").val().length != 0) {
                            $("#req-4").hide();
                        }
    
                        else {
                            if($(".new-auth-input-bx-1").val().length == 0) {
                                $("#req-4").show();
                            }
                        }

                        if($(".new-auth-input-bx-2").val().length != 0) {
                            $("#req-5").hide();
                        }
    
                        else {
                            if($(".new-auth-input-bx-2").val().length == 0) {
                                $("#req-5").show();
                            }
                        }
                    }
                }
                
                else {
                    if($(".new-auth-input-bx-1").val().length == 0) {
                        $("#req-4").show();

                        if($(".new-auth-input-bx-2").val().length != 0) {
                            $("#req-5").hide();
                        }
    
                        else {
                            if($(".new-auth-input-bx-2").val().length == 0) {
                                $("#req-5").show();
                            }
                        }
                    }
                }
            }
        });

        $(".modal-details-number").mouseup(function(e) {
            if($(".new-auth-input-bx").val().length === 0 ) {
                $(".m-btn-2 button").click(function() {
                    $(this).parent().next(".auth-modal-input-new").find(".modal-input-box").find(".req-b").show();
                });
            }

            // $(".new-auth-input-bx-1").keypress(function(event) {
            //     if(event.which == 13) {
            //         if($(".new-auth-input-bx-1").val().length != 0) {
            //             $("input#new-auth-i").focus();
            //             // alert("pranto")
            //         }
            //     }
            // });
            // $(".m-btn-2").click(function () {
            //     if($(".auth-new-input-1").val().length != 0) {
            //         $(".auth-modal-input-new").show();
            //         $(".new-auth-input-bx-1").focus();
    
            //         // authCon();
    
            //     }
            // });
            // authCon();
        });



        // $(".modal-input-box input").blur(function(){
        //     if($(this).val().length === 0) {
        //         $(this).addClass("error");
        //         $(this).siblings(".required-box").show();
        //     }

        //     else {
        //         $(this).addClass("success");
        //         $(".modal-input-new").show();
        //         $(this).siblings(".required-box").hide();
        //     }
        // });

        $(".click-auth a").click(function(e){
            e.preventDefault();
            $(".authentication-full-wrapper").addClass("active");
            $("html").addClass("modal-open");
        });

        $(".modal-close span i").click(function() {
            $("html").removeClass("modal-open");
            history.go(0);
            $(".authentication-full-wrapper").removeClass("active");
            
        });

        // zoom

        $(".figure").addClass("zoom");
        $(".zoom img").elevateZoom({zoomType: 'lens', lensShape: 'squre', lensSize: 100});

        $(".figure").first().show().siblings().hide();
        $(".product-details-img-list ul li").on('click', function() {
            var self = $(this);
            self.addClass("active").siblings().removeClass("active");
            var modal = self.attr('data-list');

            $(".figure[data-figure-item="+modal+"]").show().siblings().hide();
        });

        // product size change

        $(".product-size ul li").click(function() {
            $(this).addClass("active").siblings().removeClass('active');
        });

        // back button

        $(".nav-back span").click(function() {
            parent.history.back();
            return false;
        });

        $(".order-back img").click(function() {
            parent.history.back();
            return false;
        });

        // modal-validation

        // $(".verification-details-social-2").hide();
        // $(".new-connect-login a").click(function(e) {
        //     e.preventDefault();
        //     $(".verification-details-social-1").hide();
        //     $(".verification-details-social-2").show();
        // });

        // $(".required-box").hide();
        // $(".modal-input-new").hide();
        
        // $(".payment-check").hide();

        // $(".modal-input-box input").on("each", function(e){

        //     if(e.which == 13) {

        //         if($(this).val().length === 0) {
        //             $(this).addClass("error");
        //             $(this).siblings(".required-box").show();
        //         }
    
        //         else {
        //             $(this).addClass("success");
        //             $(".modal-input-new").show(function(e) {
        //                 if($(".otp input").val().length != 0) {
                        
        //                     // $(this).stop();
        //                     // if(ev.which == 13) {
        //                     //     return false;
        //                     // }

        //                     // if(ev.click()) {
        //                     //     return null;
        //                     // }
        //                     // $(this).attr("disabled", true);
        //                     // ev.preventDefault();
                            
        //                     $("#m-btn button").on("click", function (ev){
        //                         alert("hi") 
        //                         $("#payment-1").find(".payment-num").hide();
        //                         $("#payment-1").find(".payment-check").show().parent().addClass("green-bg");
        //                         $("#payment-1").find(".payment-item-details").hide();

        //                         $("#payment-2 .payment-item-details").show();
        //                         return true;
        //                         console.log("running", ev);
        //                     })
                            
        //                 }
        //             })
        //             $(this).siblings(".required-box").hide();
        //         }
        //     }
        // });


        // $("#payment-1").find(".payment-check").show().parent().addClass("green-bg");
        // $("#payment-1").find(".payment-item-details").hide();
        $(".payment-check").hide();

        $(".verification-details-social-2").hide();
        $(".req-b").hide();
        $(".modal-input-new").hide();
        $("#new-con a").click(function(e) {
            e.preventDefault();
    
            $(".verification-details-social-1").hide();
            $(".verification-details-social-2").show();
            $("#new-in-1 input").focus();
        });

        $("#new-in-1 input").on("keypress",function(e) {
            if(e.which == 13) {
                $("#m-btn button").click(function() {
                if($("#new-in-1 input").val().length != 0) {
                        $(".modal-input-new").show(function() {
                            $("#new-in-2 input").focus();
                            keyCon();
                        });
                        $("#req-1").hide();
                    }

                    else {
                        $("#req-1").show();
                    }
                });
            }
        })
        


        $(".verification-details-social-2").mouseup(function() {
            $("#m-btn button").click(function() {
                if($("#new-in-1 input").val().length != 0) {
                    $(".modal-input-new").show(function() {
                        $("#new-in-2 input").focus();
                        keyCon();
                        
                    });

                    $("#req-1").hide();
                }

                else {
                    $("#req-1").show();
                }
            });
        })



        //                         $("#payment-1").find(".payment-num").hide();
        //                         $("#payment-1").find(".payment-check").show().parent().addClass("green-bg");
        // $(".modal-input-new").on(function() {
        //     if($("#new-in-2 input").val().length != 0) {
        //         $("#m-btn button").click(function() {
        //             $("#payment-1 .payment-item-details").hide();
        //         });
        //     }
        //     else {
        //         $("#m-btn button").click(function() {
        //             $(".req-b").show();
        //         })
        //     }
        // })

        // user panerl addresses

        $("#add-edit").click(function() {
            var self = $(this);
            var parent_current = self.parent(".address-state");
            var current_add_input = parent_current.parent(".current-add-main").siblings(".current-add-input");
            parent_current.hide();
            parent_current.siblings(".fieid-item-add").addClass('active').find(".field-item-add-inner").hide().parent().parent().parent(".current-add").addClass('active');
            current_add_input.show();
            $("#new-add-btn button").hide();
        });

        $("#current-add-input").hide();

        $("#current-save").click(function() {
            var self = $(this);
            var current_add_btn = self.parent(".current-add-btn");
            current_add_btn.parent(".current-add-input").hide().siblings(".current-add-main").find(".fieid-item-add").removeClass("active").find(".field-item-add-inner").show().parent(".fieid-item-add").siblings(".address-state").show().parent().parent(".current-add").removeClass('active');
            $("#new-add-btn button").show();
        });

        $("#current-cancel").click(function() {
            var self = $(this);
            var current_add_btn = self.parent(".current-add-btn");
            current_add_btn.parent(".current-add-input").hide().siblings(".current-add-main").find(".fieid-item-add").removeClass("active").find(".field-item-add-inner").show().parent(".fieid-item-add").siblings(".address-state").show().parent().parent(".current-add").removeClass('active');
            $("#new-add-btn button").show();
        });

        $("#new-address-input").hide();
        $(".new-add-show-details").hide();
        $(".new-add-show-field #ads").hide();
        $("#new-add-btn button").click(function() {
            var self = $(this);
            self.hide();
            $("#new-address-input").show();

        });

        $("#cs").click(function() {
            var self = $(this);
            self.parent().parent(".current-add-input").hide().parent(".new-address-input").addClass('active').find(".new-add-show-field").addClass("active").find(".new-add-show-details").show().parent(".new-add-show-field-item").siblings("#ads").show();
            $("#new-add-btn button").show();
        });

        $("#cc").click(function() {
            var self = $(this);
            self.parent().parent(".current-add-input").hide().parent(".new-address-input").addClass('active').find(".new-add-show-field").addClass("active").find(".new-add-show-details").show().parent(".new-add-show-field-item").siblings("#ads").show();
            $("#new-add-btn button").show();
        })

        $("#add-delete").click(function() {
            var self = $(this);
            self.parent().parent(".current-add-main").siblings(".add-del").addClass('active');
        });

        $("#pos").click(function() {
            var self = $(this);
            self.parent().parent().parent(".add-del").removeClass("active").parent(".current-add").hide();
        })

        $("#neg").click(function() {
            var self = $(this);
            self.parent().parent().parent(".add-del").removeClass("active");
        })
        // $(".new-add-show-details").hide();

        // $("#add-delete").click(function() {
        //     var self = $(this);
        //     self.parent().parent().parent(".current-add").hide();
        // });
        

        $(".click-auth a").click(function(e){
            e.preventDefault();
            $(".authentication-full-wrapper").addClass("active");
            $("html").addClass("modal-open");
        });

        $(".modal-close span i").click(function() {
            $("html").removeClass("modal-open");
            history.go(0);
            $(".authentication-full-wrapper").removeClass("active");
            
        });

        // payment invoice

        $(".payment-invoice-check input").click(function() {
            
            $(this).parent().next(".payment-invo-cp").toggleClass("active");
        });

        // delivery dropdown

        // $(".delivery-input-inner.disabled").hide();
        $(".delivery-input-inner").each(function() {
            

            // var self_input = $(this).find("input");

            $(document).mouseup(function(e){
                var container = $(".delivery-input-inner");
            
                // If the target of the click isn't the container
                if(!container.is(e.target) && container.has(e.target).length === 0){
                    container.next(".delivery-dropdown").removeClass("show");
                }
            });

            $(this).click(function() {
                $(this).next(".delivery-dropdown").toggleClass("show");

                
            });

            // $(".delivery-dropdown ul li").click(function () {
            //     // $(this).addClass("hi");
            //     // alert("hi");
            //     var self_click = $(this);
            //     self_click.parent().parent().parent(".payment-delivery-select-input").children(".delivery-input-inner").children("input").val(self_click.text());
            // });

            

        });

        // if(!$(".delivery-input-inner.one input").val().length == 0 ) {
        //     $(".delivery-input-inner.disabled").show();
        // };

        // delivery field

        $(".field-item-inner").hide();
        
        // $(".field-item-main").toggleClass("full-1");

        $("#payment-2 .payment-item-details, #payment-3 .payment-item-details").hide();
        
        $(".field-item-main").click(function () {
            $(".delivery-method-field-item").find(".field-item-inner").stop().hide();
            $(this).closest(".delivery-method-field-item").find(".field-item-inner").stop().show();

        });

        $(".payment-delivery-loc").hide();
        $(".delivery-use-btn button").click(function() {
            $(this).parent().closest(".payment-delivery-prog").hide();
            $(".payment-delivery-loc").show();
            $("#btn-disable button").attr("disabled", true).addClass("dis");
            $(".rad-act").click(function() {
                $("#btn-disable button").attr("disabled", false).removeClass("dis");
            });
        });

        $(".payment-back-btn button").click(function() {
            $(".payment-delivery-prog").show();
            $(this).parent().closest(".payment-delivery-loc").hide();
            $(".field-item-inner").hide();
            $(".rad-act").prop("checked", false);
            $("#btn-disable button").attr("disabled", false).removeClass("dis");
        });

        $(".payment-confirm-btn").click(function() {
            $("#payment-2").find(".payment-num").hide();
            $("#payment-2").find(".payment-check").show().parent().addClass("green-bg");
            $("#payment-2").find(".payment-item-details").hide();

            $("#payment-3").find("#radio4").click();
            $("#payment-3 .payment-item-details").show();
        });

        $("#self-cash").hide();
        $(".field-payment-details").hide();
        $("#make-pay input").click(function() {
            $(this).parent().next(".field-payment-details").show();

                $(".make-payment-inner").find(".field-payment-details").stop().hide();
                $(this).closest(".make-payment-inner").find(".field-payment-details").stop().show();
        })

        $("#self-cash-input input").click(function() {
            $(".make-payment-right").hide();
            $("#self-cash").show();
            $(".make-payment-right input").prop("checked", false);
            $(".field-payment-details").hide();
        });

        $("#self-bkash-input input").click(function() {
            $(".make-payment-right").show();
            $("#self-cash").hide();
        });
        
        // quantity

        // $(".cart-order-item-bottom").each(function() {
        //     var btn = $(".qu-op-2").find("button");
        //     var oldVal = $(".qu-input").val();

        //     if(oldVal = 1) {
        //         $(".dec").addClass("deact");
        //     }

        //     else if (oldVal > 1) {
        //         $(".dec").removeClass("deact");
        //     }

        //     else {
        //         $(".dec").addClass("deact");
        //     }
        // })

        $(".dec").addClass("deact");

        $(".qu-btn").click(function() {

            var btn = $(this);
            var oldVal = $(".qu-input").val();

            if(btn.hasClass("inc")) {
                var newVal = parseFloat(oldVal) + 1;
                $(".dec").removeClass("deact");
            }

            else {

                if(oldVal > 1) {
                    var newVal = parseFloat(oldVal) - 1;
                    
                    if(newVal < 2) {
                        $(".dec").addClass("deact");
                    }
                }

                else {
                    var newVal = 1;
                }
            }

            btn.siblings("input").val(newVal);
        });

        // $("#pr").find("option").addClass("pranto");
        // var showSubList
        // // create json for select delivery address
        // showSubList = function(id){
        //     console.log("id ios", id)
        //      $.getJSON('/assets/js/country_area.json', function(data) {
        //          console.log(data.product)
             
        //      });
             
        // };

        

        // load_json_data('select-city');

        
       
        // load_json_data('select-area');
        // function load_json_data(id, value) {
        //     var  html  = '';
        //     $.getJSON('/assets/js/country_area.json', function(data) {
        //         // html += '<li class="select-list">Select '+id+' </li>';
               
               
        //         for(let p of data.product){
        //             html += '<li class="select-list" id="sublist">'+p.name+'</li>';
                    
        //             //document.getElementById ('ko').addEventListener ("click", showSubList, false);
                   
        //         }

        //         // $.each(data.product, function(id, product) {
        //         //     for(id=1; id<2; id++) {
        //         //         html += '<li class="select-list">'+product.name+'</li>';
        //         //     }
        //         //     // if(id == 'select-city') {
        //         //     //     if(value.parentId == 0) {
        //         //     //         html += '<li class="select-list">'+value.name+'</li>';
        //         //     //     }

        //         //     //     else {

        //         //     //         if (value.parentId == parentId) {
        //         //     //             html += '<li class="select-list">'+value.name+'</li>';
        //         //     //         }
        //         //     //     }
        //         //     // }

                    
        //         // });
        //         $("#"+id).html(html);
        //         $(".delivery-dropdown ul li").click(function () {
        //             var self_click = $(this);
        //             self_click.parent().parent().parent(".payment-delivery-select-input").children(".delivery-input-inner").children("input").val(self_click.text());
        //         });
        //         $("li#sublist").on("click",  function(e){
        //             console.log("running", e);
        //         });
        //         // $.each(data.area, function(id, area) {
        //         //     for(id=1; id<2; id++) {
        //         //         html += '<li class="select-area-list">'+area.name+'</li>';
        //         //     }
                    
        //         // });
        //         // $("#"+id).html(html);
        //         // $(".delivery-dropdown ul li").click(function () {
        //         //     // $(this).addClass("hi");
        //         //     // alert("hi");
        //         //     var self_click = $(this);
        //         //     self_click.parent().parent().parent(".payment-delivery-select-input").children(".delivery-input-inner").children("input").val(self_click.text());
        //         // });
        //     });
            

        //     load_json_data('select-area');
        //     $.getJSON('/assets/js/country_area.json', function(data) {
        //         // html += '<li class="select-list">Select '+id+' </li>';
               
               
        //         for(let p of data.area){
        //             html += '<li class="select-area-list">'+p.name+'</li>';
                    
        //             //document.getElementById ('ko').addEventListener ("click", showSubList, false);
                   
        //         }
                    
        //         // });
        //         $("#"+id).html(html);
        //         $(".delivery-dropdown ul li").click(function () {
        //             var self_click = $(this);
        //             self_click.parent().parent().parent(".payment-delivery-select-input").children(".delivery-input-inner").children("input").val(self_click.text());
        //         });
        //         $("li#sublist").on("click",  function(e){
        //             console.log("running", e);
        //         });
        //     });
        // };

        
        

        // $(document).on("change", "#select-city", function() {
        //     var sel = $("#new-con").val();
        //     if(sel != '') {
        //         load_json_data('select-area', 'select-city');
        //     }

        //     else {
        //         $('#select-area').html('<li></li>');
        //     }
        // });

        // delivery point


        $(".delivery-point-item").first().addClass("active").siblings().removeClass("active");
        $(".delivery-point-details-item").first().show().siblings().hide();
        $(".delivery-point-item").click(function(e) {
            var self = $(this);
            var self_show = self.attr('data-agent-icon');
            self.addClass("active").siblings().removeClass("active");
            $(".delivery-point-details-item[data-agent-details="+self_show+"]").show().siblings().hide();
        });

        $("#location-delivery").click(function() {
            $(".delivery-full-wrapper").addClass("active");
            $("html").addClass("modal-open");
        });

        $(".profile-delivery-act").click(function() {
            $(".delivery-full-wrapper").addClass("active");
            $("html").addClass("modal-open");
        });

        // dashbard edit

        $(".profile-name-box").each(function() {
            $(".profile-input").hide();
            var pro_tag_main = $(".profile-tag h3");
            var pro_tag = pro_tag_main.text();
            var pro_tag_input = pro_tag_main.parent().next(".profile-input").find("input");
            pro_tag_input.val(pro_tag);

            
            $(".profile-edit-ac").click(function() {
                $(this).parent(".profile-tag").hide();
                $(this).parent().next(".profile-input").show();
            });

            $(".save-btn").click(function() {
                $(this).parent().parent(".profile-input").hide();
                $(this).parent().parent().parent().find(".profile-tag").show();

                if(pro_tag_input.val() != 0) {
                    var new_input = pro_tag_input.val();
                    pro_tag_main.text(new_input);

                    
                }

                
            })

            $(".cancel-btn").click(function() {
                $(this).parent().parent(".profile-input").hide();
                $(this).parent().parent().parent().find(".profile-tag").show();
                // pro_tag_input.val(new_input);
            })

            


            
        });
        
        

        $(".click-less").hide();
        $("li.nav-category-dropdown-list").not(":lt(8)").hide();
        $(".click-more").click(function() {
            $(this).hide().siblings().show();
            $("li.nav-category-dropdown-list").toggleClass("active").slideDown("fast");
        });
        $(".click-less").click(function() {
            $(this).hide().siblings().show();
            $("li.nav-category-dropdown-list").not(":lt(8)").toggleClass("active").slideUp("fast");
        });


        // feaured products vertical ellipsis

        // var verticalTextInner = $(".vertical-text").height();
        // $(".vertical-text-inner a").each(function() {
        //     var $innerText = $(this);
            
        //     while($innerText.outerHeight(true) > verticalTextInner) {
        //         $innerText.text(function(index, text) {
        //             return text.replace(/\W*\s(\S)*$/, '...');
        //         });
        //     }
        // });

        $(".mobile-nav-button button").click(function() {
            $(".mobile-nav").toggleClass("mobile-nav-toggle");
        });

        // dropdown menu
        
        $(".sub-menu").css({"transform": "scale(0.8)", "opacity": "0", "transition": "all 0.3s ease-in-out"});
        $(".nav-list-item .navi-list").click(function(e) {
            e.preventDefault();
            var thisItem = $(this);

            if(thisItem.parent().hasClass("sel")) {
                thisItem.parent().find(".sub-menu").css({"transform": "scale(0.8)", "opacity": "0", "transition": "all 0.3s ease-in-out", "z-index": "100"});
                thisItem.parent(".nav-list-item.sel").removeClass("sel");
            }

            else {
                thisItem.parent().find(".sub-menu").css({"transform": "scale(0.8)", "opacity": "0", "transition": "all 0.3s ease-in-out", "pointer-events": "none"});
                thisItem.parent(".nav-list-item.sel").removeClass("sel");

                if(thisItem.next(".sub-menu").length) {
                    thisItem.parent().addClass("sel");
                    thisItem.next(".sub-menu").css({"transform": "scale(1)", "opacity": "1", "pointer-events": "all"});
                }
            }
        });

        $(document).mouseup(function(e){
            var body = $(".sub-menu");
            
            if(!body.is(e.body) && body.has(e.target).length === 0){
                body.css({"transform": "scale(0.8)", "opacity": "0", "transition": "all 0.3s ease-in-out"});
            }
        });

        $(document).mouseup(function(e){
            var selbody = $(".nav-list-item.sel");
            
            if(!selbody.is(e.selbody) && selbody.has(e.target).length === 0){
                selbody.removeClass("sel");
            }
        });
    
        // fixed navbar
    
        // $(document).on('scroll', function() {
        //     var scrollPos = $(this).scrollTop();
    
        //     if( scrollPos > 10 ) {
        //         $('nav').addClass('navbar-home');
        //     }
    
        //     else {
        //         $('nav').removeClass('navbar-home');
        //     }
        // });

        // header slider

        $('.header-carousel.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            nav: true,
			navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
			],
            responsive:{
                0:{
                    items: 1
                },

                600:{
                    items: 1
                },

                1000:{
                    items: 1
                }
            }
        });

        // category slider

        $('.category-section.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            nav: false,
			navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
			],
            responsive:{
                0:{
                    items: 1
                },

                600:{
                    items: 5
                },

                1000:{
                    items: 7
                }
            }
        });

        // featured slider

        $('.featured-section.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            nav: false,
			navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
			],
            responsive:{
                0:{
                    items: 1
                },

                600:{
                    items: 5
                },

                1000:{
                    items: 5
                }
            }
        });

        // flash slider

        $('.flash-section.owl-carousel').owlCarousel({
            loop: true,
            margin: 15,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            nav: false,
			navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
			],
            responsive:{
                0:{
                    items: 1
                },

                400: {
                    items: 2
                },

                600:{
                    items: 3
                },

                1000:{
                    items: 4
                }
            }
        });

        // advertise slider

        $('.advertise-carousel').owlCarousel({
            loop: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            nav: true,
			navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
			],
            responsive:{
                0:{
                    items: 1
                },

                600:{
                    items: 1
                },

                1000:{
                    items: 1
                }
            }
        });

        // result slider

        $('.result-figure').owlCarousel({
            loop: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            dots: false,
            nav: true,
			navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
			],
            responsive:{
                0:{
                    items: 1
                },

                600:{
                    items: 1
                },

                1000:{
                    items: 1
                }
            }
        });

         // supplier slider

         $('.supplier-section.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            nav: false,
            responsive:{
                0:{
                    items: 1
                },

                600:{
                    items: 5
                },

                1000:{
                    items: 5
                }
            }
        });

         // category product  slider

         $('.category-featured-carousel').owlCarousel({
            loop: true,
            margin: 10,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            nav: false,
            responsive:{
                
                0:{
                    dotsEach: 3,
                    items: 1
                },

                600:{
                    dotsEach: 3,
                    items: 1
                },

                1000:{
                    dotsEach: 3,
                    items: 1
                }
            }
        });

        // dropdown hover scroll
        $(".category-menu-list").hover(function() {
            $(this).parent().parent().parent(".modal-item-box").css("overflow", "visible") }, function() {
            $(this).parent().parent().parent(".modal-item-box").css("overflow-y", "scroll");
        });

        // click function for menu bar

        $(".navi-1").click(function() {
            $(".ecommerce-modal").addClass("active");
            $(".ecommerce-modal-item-1").addClass("active");
            $("html").addClass("modal-open");
        });

        $(".navi-2").click(function() {
            $(".ecommerce-modal").addClass("active");
            $(".ecommerce-modal-item-2").addClass("active");
            $("html").addClass("modal-open");
        });

        $(".navi-3").click(function() {
            $(".ecommerce-modal").addClass("active");
            $(".ecommerce-modal-item-3").addClass("active");
            $("html").addClass("modal-open");
        });

        $(".login-navi").click(function() {
            $(".ecommerce-modal").addClass("active");
            $(".ecommerce-authentication-modal").addClass("active");
            $("html").addClass("modal-open");
        });

        $(".ecommerce-modal-item-1 .modal-close span i").click(function() {
            $(".ecommerce-modal").removeClass("active");
            $(".ecommerce-modal-item-1").removeClass("active");
            $("html").removeClass("modal-open");
        });

        $(".ecommerce-modal-item-2 .modal-close span i").click(function() {
            $(".ecommerce-modal").removeClass("active");
            $(".ecommerce-modal-item-2").removeClass("active");
            $("html").removeClass("modal-open");
        });

        $(".ecommerce-modal-item-3 .modal-close span i").click(function() {
            $(".ecommerce-modal").removeClass("active");
            $(".ecommerce-modal-item-3").removeClass("active");
            $("html").removeClass("modal-open");
        });

        $(".ecommerce-authentication-modal .modal-close span i").click(function() {
            $(".ecommerce-modal").removeClass("active");
            $(".ecommerce-authentication-modal").removeClass("active");
            $("html").removeClass("modal-open");
        });

        // search bar 

        $(".search-navi a").click(function(e) {
            e.preventDefault();

            $(this).next(".search-box").toggleClass("active");
        });

        $(document).mouseup(function(e){
            var research = $(".search-box");
            
            if(!research.is(e.research) && research.has(e.target).length === 0){
               research.removeClass("active");
            }
        });


        $(".result-figure .item figure figcaption").click(function() {
            $(this).toggleClass("clicked");
        });

        $(".extra-cat-list").hide();
        $(".cat-more-link").click(function(e) {
            e.preventDefault();
            $(this).hide();
            $(".extra-cat-list").slideToggle();
        });

        // $(".cate-list-drp").hide();
        $(".category-list-details ul li a").on("click", function(e){
            e.preventDefault();
            $(this).parent().find(".cate-list-drp").slideToggle().addClass("cate-list-drp-hide");
        });

        $('.result-list-right-inner ul li span').bind('mouseenter', function(){
            var $this = $(this);
            if(this.offsetWidth < this.scrollWidth){
                $this.attr('title', $this.text());
            }
        });

        // price ranger

        // $( "#price-range" ).slider({
		// 	range: true,
		// 	min: 0,
		// 	max: 500,
		// 	values: [ 75, 300 ],
		// 	slide: function( event, ui ) {
		// 		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		// 	}
		// });
		// $( "#amount" ).val( "$" + $( "#price-range" ).slider( "values", 0 ) +
        //     " - $" + $( "#price-range" ).slider( "values", 1 ) );
            
        // helpful data

        $(".help-action-item").hide();
        $(".help-list").on("click", function() {
            var self = $(this);
            self.parent().addClass("active").siblings().removeClass("active");
            var self_attr = self.attr("data-help-list");
            $(".help-action-item[data-help-action="+self_attr+"]").show().siblings().hide();
        });

        // show review message

        $(".show-cmnt-det").slideUp();
        $(".show-res ul li a").on("click", function(e) {
            e.preventDefault();
            $(".show-cmnt-det").slideDown();
        });
        $(".hide-comment a").on("click", function(e) {
            e.preventDefault();
            $(".show-cmnt-det").slideUp();
        });

        $(".leave-review-box").slideUp();
        $(".lea-rev button").click(function() {
            $(".leave-review-box").slideDown();
        });
        $(".cl").click(function(e) {
            e.preventDefault();
            $(".leave-review-box").slideUp();
        });

        // Product details filter

        $(".speci-list-1").addClass("active");
        $(".product-speci-item-1").show().siblings().hide();
        $(".speci-list").click(function() {
            var self = $(this);
            self.addClass("active").siblings().removeClass("active");
            var self_model = self.attr("data-speci-list");
            $(".product-speci-item[data-product-speci-item="+self_model+"]").show().siblings().hide();
        });

        
    // get value from input in category page 

    // if($(".category-option-inner-text p").text(0)) {
    //     $(".category-option-show-item").hide();
    // }

    // else {
    //     $(".category-option-show-item").show();
    // }

    $(".category-option-show-item").hide();
    $(".category-option-button button").click(function() {

       
        var input_value = $(".category-option-input input").val();
        $(input_value).value = $(input_value).attr("placeholder");
        if($(".category-option-inner-text p").html(input_value)) {
            $(input_value).val("");
            
            $(".category-option-show-item").show(); 
           
            $(".category-option-close span i").click(function() {
                $(this).parent().parent().parent().parent(".category-option-show-item").hide();
            });
        }
    });

    // category option slide

    // $(".category-box-list-action").click(function(e) {
    //     e.preventDefault();
    //     $(this).toggleClass("active").next("ul").slideToggle("fast").addClass("slide-active");
    // });

    $(".category-box-list-active").first().addClass("active-list-show active");
    $(".category-box-dropdown").children().first().addClass("active");
    $(".category-box-dropdown").first().addClass("slide-active");
    $(".category-box-list-action").click(function(e) {
        e.preventDefault();
        $(this).parent(".category-box-list-active").addClass("active-list-show active").siblings().removeClass("active-list-show active");
        $(".category-box-dropdown").children().removeClass("active");
        $(this).next(".category-box-dropdown").toggleClass("active").slideToggle("fast").addClass("slide-active").$(".category-box-dropdown").removeClass("slide-active");
    });
    $(".category-box-dropdown li a").click(function(e) {
        // e.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass("active");
    })

    $(".category-size-option ul li").click(function() {
        $(this).addClass("bg").siblings().removeClass("bg");
    });

    $(".pro-size ul li").click(function() {
        $(this).addClass("bg").siblings().removeClass("bg");
    });

    $(".search-box-icon button").click(function() {
        // alert("hi");
    })
    

    });
    $(window).on('resize load',function(){
        catContainer();
    });

// })(jQuery);