﻿import { Injectable } from "@angular/core";

@Injectable()
export class LayoutConfiguration {
    /* 01. Handle Scrollbar
    ------------------------------------------------ */
    public handleSlimScroll(): void {
        $("[data-scrollbar=true]").each(() => {
            this.generateSlimScroll($(this));
        });
    }

    public generateSlimScroll(element: any): void {
        if ($(element).attr("data-init")) { return; }

        var dataHeight: string = $(element).attr("data-height");
        dataHeight = (!dataHeight) ? $(element).height().toString() : dataHeight;

        var scrollBarOption = {
            height: dataHeight,
            alwaysVisible: true
        };

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $(element).css('height', dataHeight);
            $(element).css('overflow-x', 'scroll');
        } else {
            $(element).slimScroll(scrollBarOption);
        }
        $(element).attr('data-init', "true");
    }

    /* 02. Handle Sidebar - Menu
------------------------------------------------ */
    public handleSidebarMenu(): void {
        $('.sidebar .nav > .has-sub > a').click(function () {
            var target = $(this).next('.sub-menu');
            var otherMenu = '.sidebar .nav > li.has-sub > .sub-menu';

            if ($('.page-sidebar-minified').length === 0) {
                $(otherMenu).not(target).slideUp(250, function () {
                    $(this).closest('li').removeClass('expand');
                });
                $(target).slideToggle(250, function () {
                    var targetLi = $(this).closest('li');
                    if ($(targetLi).hasClass('expand')) {
                        $(targetLi).removeClass('expand');
                    } else {
                        $(targetLi).addClass('expand');
                    }
                });
            }
        });
        $('.sidebar .nav > .has-sub .sub-menu li.has-sub > a').click(function () {
            if ($('.page-sidebar-minified').length === 0) {
                var target = $(this).next('.sub-menu');
                $(target).slideToggle(250);
            }
        });
    }

    /* 03. Handle Sidebar - Mobile View Toggle
------------------------------------------------ */

    /* 04. Handle Sidebar - Minify / Expand
------------------------------------------------ */
    public handleSidebarMinify(): void {
        $('[data-click=sidebar-minify]').click(function (e) {
            e.preventDefault();
            var sidebarClass = 'page-sidebar-minified';
            var targetContainer = '#page-container';
            $('#sidebar [data-scrollbar="true"]').css('margin-top', '0');
            $('#sidebar [data-scrollbar="true"]').removeAttr('data-init');
            $('#sidebar [data-scrollbar=true]').stop();
            if ($(targetContainer).hasClass(sidebarClass)) {
                $(targetContainer).removeClass(sidebarClass);
                if ($(targetContainer).hasClass('page-sidebar-fixed')) {
                    if ($('#sidebar .slimScrollDiv').length !== 0) {
                        $('#sidebar [data-scrollbar="true"]').slimScroll();
                        $('#sidebar [data-scrollbar="true"]').removeAttr('style');
                    }
                    this.generateSlimScroll($('#sidebar [data-scrollbar="true"]'));
                    $('#sidebar [data-scrollbar=true]').trigger('mouseover');
                } else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    if ($('#sidebar .slimScrollDiv').length !== 0) {
                        $('#sidebar [data-scrollbar="true"]').slimScroll();
                        $('#sidebar [data-scrollbar="true"]').removeAttr('style');
                    }
                    this.generateSlimScroll($('#sidebar [data-scrollbar="true"]'));
                }
            } else {
                $(targetContainer).addClass(sidebarClass);

                if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    if ($(targetContainer).hasClass('page-sidebar-fixed')) {
                        $('#sidebar [data-scrollbar="true"]').slimScroll();
                        $('#sidebar [data-scrollbar="true"]').removeAttr('style');
                    }
                    $('#sidebar [data-scrollbar=true]').trigger('mouseover');
                } else {
                    $('#sidebar [data-scrollbar="true"]').css('margin-top', '0');
                    $('#sidebar [data-scrollbar="true"]').css('overflow', 'visible');
                }
            }
            $(window).trigger('resize');
        });
    }

    public handleMobileSidebarToggle(): void {
        var sidebarProgress = false;
        $('.sidebar').bind('click touchstart', function (e) {
            if ($(e.target).closest('.sidebar').length !== 0) {
                sidebarProgress = true;
            } else {
                sidebarProgress = false;
                e.stopPropagation();
            }
        });

        $(document).bind('click touchstart', function (e) {
            if ($(e.target).closest('.sidebar').length === 0) {
                sidebarProgress = false;
            }
            if (!e.isPropagationStopped() && sidebarProgress !== true) {
                if ($('#page-container').hasClass('page-sidebar-toggled')) {
                    sidebarProgress = true;
                    $('#page-container').removeClass('page-sidebar-toggled');
                }
                if ($(window).width() <= 767) {
                    if ($('#page-container').hasClass('page-right-sidebar-toggled')) {
                        sidebarProgress = true;
                        $('#page-container').removeClass('page-right-sidebar-toggled');
                    }
                }
            }
        });

        $('[data-click=right-sidebar-toggled]').click(function (e) {
            e.stopPropagation();
            var targetContainer = '#page-container';
            var targetClass = 'page-right-sidebar-collapsed';
            targetClass = ($(window).width() < 979) ? 'page-right-sidebar-toggled' : targetClass;
            if ($(targetContainer).hasClass(targetClass)) {
                $(targetContainer).removeClass(targetClass);
            } else if (sidebarProgress !== true) {
                $(targetContainer).addClass(targetClass);
            } else {
                sidebarProgress = false;
            }
            if ($(window).width() < 480) {
                $('#page-container').removeClass('page-sidebar-toggled');
            }
        });

        $('[data-click=sidebar-toggled]').click(function (e) {
            e.stopPropagation();
            var sidebarClass = 'page-sidebar-toggled';
            var targetContainer = '#page-container';

            if ($(targetContainer).hasClass(sidebarClass)) {
                $(targetContainer).removeClass(sidebarClass);
            } else if (sidebarProgress !== true) {
                $(targetContainer).addClass(sidebarClass);
            } else {
                sidebarProgress = false;
            }
            if ($(window).width() < 480) {
                $('#page-container').removeClass('page-right-sidebar-toggled');
            }
        });
    }

    /* 05. Handle Page Load - Fade in
------------------------------------------------ */
    public handlePageContentView(): void {
        "use strict";
        $.when($('#page-loader').addClass('hide')).done(function () {
            $('#page-container').addClass('in');
        });
    }

    /* 06. Handle Panel - Remove / Reload / Collapse / Expand
------------------------------------------------ */
    public panelActionRunning = false;
    public handlePanelAction(): any {
        "use strict";

        if (this.panelActionRunning) {
            return false;
        }
        this.panelActionRunning = true;

        // remove
        $(document).on('hover', '[data-click=panel-remove]', function (e) {
            $(this).tooltip({
                title: 'Remove',
                placement: 'bottom',
                trigger: 'hover',
                container: 'body'
            });
            $(this).tooltip('show');
        });
        $(document).on('click', '[data-click=panel-remove]', function (e) {
            e.preventDefault();
            $(this).tooltip('destroy');
            $(this).closest('.panel').remove();
        });

        // collapse
        $(document).on('hover', '[data-click=panel-collapse]', function (e) {
            $(this).tooltip({
                title: 'Collapse / Expand',
                placement: 'bottom',
                trigger: 'hover',
                container: 'body'
            });
            $(this).tooltip('show');
        });
        $(document).on('click', '[data-click=panel-collapse]', function (e) {
            e.preventDefault();
            $(this).closest('.panel').find('.panel-body').slideToggle();
        });

        // reload
        $(document).on('hover', '[data-click=panel-reload]', function (e) {
            $(this).tooltip({
                title: 'Reload',
                placement: 'bottom',
                trigger: 'hover',
                container: 'body'
            });
            $(this).tooltip('show');
        });
        $(document).on('click', '[data-click=panel-reload]', function (e) {
            e.preventDefault();
            var target = $(this).closest('.panel');
            if (!$(target).hasClass('panel-loading')) {
                var targetBody = $(target).find('.panel-body');
                var spinnerHtml = '<div class="panel-loader"><span class="spinner-small"></span></div>';
                $(target).addClass('panel-loading');
                $(targetBody).prepend(spinnerHtml);
                setTimeout(function () {
                    $(target).removeClass('panel-loading');
                    $(target).find('.panel-loader').remove();
                }, 2000);
            }
        });

        // expand
        $(document).on('hover', '[data-click=panel-expand]', function (e) {
            $(this).tooltip({
                title: 'Expand / Compress',
                placement: 'bottom',
                trigger: 'hover',
                container: 'body'
            });
            $(this).tooltip('show');
        });
        $(document).on('click', '[data-click=panel-expand]', function (e) {
            e.preventDefault();
            var target = $(this).closest('.panel');
            var targetBody = $(target).find('.panel-body');
            var targetTop = 40;
            if ($(targetBody).length !== 0) {
                var targetOffsetTop = $(target).offset().top;
                var targetBodyOffsetTop = $(targetBody).offset().top;
                targetTop = targetBodyOffsetTop - targetOffsetTop;
            }

            if ($('body').hasClass('panel-expand') && $(target).hasClass('panel-expand')) {
                $('body, .panel').removeClass('panel-expand');
                $('.panel').removeAttr('style');
                $(targetBody).removeAttr('style');
            } else {
                $('body').addClass('panel-expand');
                $(this).closest('.panel').addClass('panel-expand');

                if ($(targetBody).length !== 0 && targetTop != 40) {
                    var finalHeight = 40;
                    $(target).find(' > *').each(function () {
                        var targetClass = $(this).attr('class');

                        if (targetClass != 'panel-heading' && targetClass != 'panel-body') {
                            finalHeight += $(this).height() + 30;
                        }
                    });
                    if (finalHeight != 40) {
                        $(targetBody).css('top', finalHeight + 'px');
                    }
                }
            }
            $(window).trigger('resize');
        });
    }

    /* 07. Handle Panel - Draggable
    ------------------------------------------------ */
    public handleDraggablePanel(): void {
        var target = $('.panel').parent('[class*=col]');
        var targetHandle = '.panel-heading';
        var connectedTarget = '.row > [class*=col]';

        $(target).sortable({
            handle: targetHandle,
            connectWith: connectedTarget,
            stop: function (event, ui) {
                ui.item.find('.panel-title').append('<i class="fa fa-refresh fa-spin m-l-5" data-id="title-spinner"></i>');
                this.handleSavePanelPosition(ui.item);
            }
        });
    }

    /* 08. Handle Tooltip & Popover Activation
    ------------------------------------------------ */
    public handelTooltipPopoverActivation(): void {
        $('[data-toggle=tooltip]').tooltip();
        $('[data-toggle=popover]').popover();
    }

    /* 09. Handle Scroll to Top Button Activation
    ------------------------------------------------ */
    public handleScrollToTopButton(): void {
        $(document).scroll(function () {
            var totalScroll = $(document).scrollTop();

            if (totalScroll >= 200) {
                $('[data-click=scroll-top]').addClass('in');
            } else {
                $('[data-click=scroll-top]').removeClass('in');
            }
        });

        $('[data-click=scroll-top]').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("body").offset().top
            }, 500);
        });
    }

    /* 10. Handle Theme & Page Structure Configuration - added in V1.2
------------------------------------------------ */
    public handleThemePageStructureControl(): void {
        // COOKIE - Theme File Setting
        if ($.cookie && $.cookie('theme')) {
            if ($('.theme-list').length !== 0) {
                $('.theme-list [data-theme]').closest('li').removeClass('active');
                $('.theme-list [data-theme="' + $.cookie('theme') + '"]').closest('li').addClass('active');
            }
            var cssFileSrc = 'assets/css/theme/' + $.cookie('theme') + '.css';
            $('#theme').attr('href', cssFileSrc);
        }

        // COOKIE - Sidebar Styling Setting
        if ($.cookie && $.cookie('sidebar-styling')) {
            if ($('.sidebar').length !== 0 && $.cookie('sidebar-styling') == 'grid') {
                $('.sidebar').addClass('sidebar-grid');
                $('[name=sidebar-styling] option[value="2"]').prop('selected', true);
            }
        }

        // COOKIE - Header Setting
        if ($.cookie && $.cookie('header-styling')) {
            if ($('.header').length !== 0 && $.cookie('header-styling') == 'navbar-inverse') {
                $('.header').addClass('navbar-inverse');
                $('[name=header-styling] option[value="2"]').prop('selected', true);
            }
        }

        // COOKIE - Gradient Setting
        if ($.cookie && $.cookie('content-gradient')) {
            if ($('#page-container').length !== 0 && $.cookie('content-gradient') == 'enabled') {
                $('#page-container').addClass('gradient-enabled');
                $('[name=content-gradient] option[value="2"]').prop('selected', true);
            }
        }

        // COOKIE - Content Styling Setting
        if ($.cookie && $.cookie('content-styling')) {
            if ($('body').length !== 0 && $.cookie('content-styling') == 'black') {
                $('body').addClass('flat-black');
                $('[name=content-styling] option[value="2"]').prop('selected', true);
            }
        }

        // THEME - theme selection
        $('.theme-list [data-theme]').click(function () {
            var cssFileSrc = 'assets/css/theme/' + $(this).attr('data-theme') + '.css';
            $('#theme').attr('href', cssFileSrc);
            $('.theme-list [data-theme]').not(this).closest('li').removeClass('active');
            $(this).closest('li').addClass('active');
            $.cookie('theme', $(this).attr('data-theme'));
        });

        // HEADER - inverse or default
        $('.theme-panel [name=header-styling]').on('change', function () {
            var targetClassAdd = ($(this).val() == 1) ? 'navbar-default' : 'navbar-inverse';
            var targetClassRemove = ($(this).val() == 1) ? 'navbar-inverse' : 'navbar-default';
            $('#header').removeClass(targetClassRemove).addClass(targetClassAdd);
            $.cookie('header-styling', targetClassAdd);
        });

        // SIDEBAR - grid or default
        $('.theme-panel [name=sidebar-styling]').on('change', function () {
            if ($(this).val() == 2) {
                $('#sidebar').addClass('sidebar-grid');
                $.cookie('sidebar-styling', 'grid');
            } else {
                $('#sidebar').removeClass('sidebar-grid');
                $.cookie('sidebar-styling', 'default');
            }
        });

        // CONTENT - gradient enabled or disabled
        $('.theme-panel [name=content-gradient]').on('change', function () {
            if ($(this).val() == 2) {
                $('#page-container').addClass('gradient-enabled');
                $.cookie('content-gradient', 'enabled');
            } else {
                $('#page-container').removeClass('gradient-enabled');
                $.cookie('content-gradient', 'disabled');
            }
        });

        // CONTENT - default or black
        $(document).on('change', '.theme-panel [name=content-styling]', function () {
            if ($(this).val() == 2) {
                $('body').addClass('flat-black');
                $.cookie('content-styling', 'black');
            } else {
                $('body').removeClass('flat-black');
                $.cookie('content-styling', 'default');
            }
        });

        // SIDEBAR - fixed or default
        $(document).on('change', '.theme-panel [name=sidebar-fixed]', function () {
            if ($(this).val() == 1) {
                if ($('.theme-panel [name=header-fixed]').val() == 2) {
                    alert('Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar.');
                    $('.theme-panel [name=header-fixed] option[value="1"]').prop('selected', true);
                    $('#header').addClass('navbar-fixed-top');
                    $('#page-container').addClass('page-header-fixed');
                }
                $('#page-container').addClass('page-sidebar-fixed');
                if (!$('#page-container').hasClass('page-sidebar-minified')) {
                    this.generateSlimScroll($('.sidebar [data-scrollbar="true"]'));
                }
            } else {
                $('#page-container').removeClass('page-sidebar-fixed');
                if ($('.sidebar .slimScrollDiv').length !== 0) {
                    if ($(window).width() <= 979) {
                        $('.sidebar').each(function () {
                            if (!($('#page-container').hasClass('page-with-two-sidebar') && $(this).hasClass('sidebar-right'))) {
                                $(this).find('.slimScrollBar').remove();
                                $(this).find('.slimScrollRail').remove();
                                $(this).find('[data-scrollbar="true"]').removeAttr('style');
                                var targetElement = $(this).find('[data-scrollbar="true"]').parent();
                                var targetHtml = $(targetElement).html();
                                $(targetElement).replaceWith(targetHtml);
                            }
                        });
                    } else if ($(window).width() > 979) {
                        $('.sidebar [data-scrollbar="true"]').slimScroll();
                        $('.sidebar [data-scrollbar="true"]').removeAttr('style');
                    }
                }
                if ($('#page-container .sidebar-bg').length === 0) {
                    $('#page-container').append('<div class="sidebar-bg"></div>');
                }
            }
        });

        // HEADER - fixed or default
        $(document).on('change', '.theme-panel [name=header-fixed]', function () {
            if ($(this).val() == 1) {
                $('#header').addClass('navbar-fixed-top');
                $('#page-container').addClass('page-header-fixed');
                $.cookie('header-fixed', true);
            } else {
                if ($('.theme-panel [name=sidebar-fixed]').val() == 1) {
                    alert('Default Header with Fixed Sidebar option is not supported. Proceed with Default Header with Default Sidebar.');
                    $('.theme-panel [name=sidebar-fixed] option[value="2"]').prop('selected', true);
                    $('#page-container').removeClass('page-sidebar-fixed');
                    if ($('#page-container .sidebar-bg').length === 0) {
                        $('#page-container').append('<div class="sidebar-bg"></div>');
                    }
                }
                $('#header').removeClass('navbar-fixed-top');
                $('#page-container').removeClass('page-header-fixed');
                $.cookie('header-fixed', false);
            }
        });
    }

    /* 12. Handle After Page Load Add Class Function - added in V1.2
------------------------------------------------ */
    public handleAfterPageLoadAddClass(): void {
        if ($('[data-pageload-addclass]').length !== 0) {
            $(window).load(function () {
                $('[data-pageload-addclass]').each(function () {
                    var targetClass = $(this).attr('data-pageload-addclass');
                    $(this).addClass(targetClass);
                });
            });
        }
    }

    /* 13. Handle Save Panel Position Function - added in V1.5
    ------------------------------------------------ */
    public handleSavePanelPosition(element: any): void {
        "use strict";
        if ($('.ui-sortable').length !== 0) {
            var newValue = [];
            var index = 0;
            $.when($('.ui-sortable').each(function () {
                var panelSortableElement = $(this).find('[data-sortable-id]');
                if (panelSortableElement.length !== 0) {
                    var columnValue = [];
                    $(panelSortableElement).each(function () {
                        var targetSortId = $(this).attr('data-sortable-id');
                        columnValue.push({ id: targetSortId });
                    });
                    newValue.push(columnValue);
                } else {
                    newValue.push([]);
                }
                index++;
            })).done(function () {
                var targetPage: any = window.location.href;
                targetPage = targetPage.split('?');
                targetPage = targetPage[0];
                localStorage.setItem(targetPage, JSON.stringify(newValue));
                $(element).find('[data-id="title-spinner"]').delay(500).fadeOut(500, function () {
                    $(this).remove();
                });
            });
        }
    }

    /* 14. Handle Draggable Panel Local Storage Function - added in V1.5
    ------------------------------------------------ */
    public handleLocalStorage(): void {
        if (typeof (Storage) !== 'undefined' && typeof (localStorage) !== 'undefined') {
            var targetPage: any = window.location.href;
            targetPage = targetPage.split('?');
            targetPage = targetPage[0];
            var panelPositionData = localStorage.getItem(targetPage);

            if (panelPositionData) {
                panelPositionData = JSON.parse(panelPositionData);
                var i = 0;
                $('.panel').parent('[class*="col-"]').each(function () {
                    var storageData = panelPositionData[i];
                    var targetColumn = $(this);
                    if (storageData) {
                        $.each(storageData, function (index, data) {
                            var targetId = $('[data-sortable-id="' + data.id + '"]').not('[data-init="true"]');
                            if ($(targetId).length !== 0) {
                                var targetHtml = $(targetId).clone();
                                $(targetId).remove();
                                $(targetColumn).append(targetHtml);
                                $('[data-sortable-id="' + data.id + '"]').attr('data-init', 'true');
                            }
                        });
                    }
                    i++;
                });
            }
        } else {
            alert('Your browser is not supported with the local storage');
        }
    }

    /* 16. Handle IE Full Height Page Compatibility - added in V1.6
------------------------------------------------ */
    public handleIEFullHeightContent(): void {
        var userAgent = window.navigator.userAgent;
        var msie = userAgent.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            $('.vertical-box-row [data-scrollbar="true"][data-height="100%"]').each(function () {
                var targetRow = $(this).closest('.vertical-box-row');
                var targetHeight = $(targetRow).height();
                $(targetRow).find('.vertical-box-cell').height(targetHeight);
            });
        }
    }

    /* 17. Handle Unlimited Nav Tabs - added in V1.6
------------------------------------------------ */
    public handleUnlimitedTabsRender(): void {
        // function handle tab overflow scroll width
        function handleTabOverflowScrollWidth(obj, animationSpeed) {
            var marginLeft = parseInt($(obj).css('margin-left'));
            var viewWidth = $(obj).width();
            var prevWidth = $(obj).find('li.active').width();
            var speed = (animationSpeed > -1) ? animationSpeed : 150;
            var fullWidth = 0;

            $(obj).find('li.active').prevAll().each(function () {
                prevWidth += $(this).width();
            });

            $(obj).find('li').each(function () {
                fullWidth += $(this).width();
            });

            if (prevWidth >= viewWidth) {
                var finalScrollWidth = prevWidth - viewWidth;
                if (fullWidth != prevWidth) {
                    finalScrollWidth += 40;
                }
                $(obj).find('.nav.nav-tabs').animate({ marginLeft: '-' + finalScrollWidth + 'px' }, speed);
            }

            if (prevWidth != fullWidth && fullWidth >= viewWidth) {
                $(obj).addClass('overflow-right');
            } else {
                $(obj).removeClass('overflow-right');
            }

            if (prevWidth >= viewWidth && fullWidth >= viewWidth) {
                $(obj).addClass('overflow-left');
            } else {
                $(obj).removeClass('overflow-left');
            }
        }

        // function handle tab button action - next / prev
        function handleTabButtonAction(element, direction) {
            var obj = $(element).closest('.tab-overflow');
            var marginLeft = parseInt($(obj).find('.nav.nav-tabs').css('margin-left'));
            var containerWidth = $(obj).width();
            var totalWidth = 0;
            var finalScrollWidth = 0;

            $(obj).find('li').each(function () {
                if (!$(this).hasClass('next-button') && !$(this).hasClass('prev-button')) {
                    totalWidth += $(this).width();
                }
            });

            switch (direction) {
                case 'next':
                    var widthLeft = totalWidth + marginLeft - containerWidth;
                    if (widthLeft <= containerWidth) {
                        finalScrollWidth = widthLeft - marginLeft;
                        setTimeout(function () {
                            $(obj).removeClass('overflow-right');
                        }, 150);
                    } else {
                        finalScrollWidth = containerWidth - marginLeft - 80;
                    }

                    if (finalScrollWidth != 0) {
                        $(obj).find('.nav.nav-tabs').animate({ marginLeft: '-' + finalScrollWidth + 'px' }, 150, function () {
                            $(obj).addClass('overflow-left');
                        });
                    }
                    break;
                case 'prev':
                    var widthLeft = -marginLeft;

                    if (widthLeft <= containerWidth) {
                        $(obj).removeClass('overflow-left');
                        finalScrollWidth = 0;
                    } else {
                        finalScrollWidth = widthLeft - containerWidth + 80;
                    }
                    $(obj).find('.nav.nav-tabs').animate({ marginLeft: '-' + finalScrollWidth + 'px' }, 150, function () {
                        $(obj).addClass('overflow-right');
                    });
                    break;
            }
        }

        // handle page load active tab focus
        function handlePageLoadTabFocus() {
            $('.tab-overflow').each(function () {
                var targetWidth = $(this).width();
                var targetInnerWidth = 0;
                var targetTab = $(this);
                var scrollWidth = targetWidth;

                $(targetTab).find('li').each(function () {
                    var targetLi = $(this);
                    targetInnerWidth += $(targetLi).width();

                    if ($(targetLi).hasClass('active') && targetInnerWidth > targetWidth) {
                        scrollWidth -= targetInnerWidth;
                    }
                });

                handleTabOverflowScrollWidth(this, 0);
            });
        }

        // handle tab next button click action
        $('[data-click="next-tab"]').click(function (e) {
            e.preventDefault();
            handleTabButtonAction(this, 'next');
        });

        // handle tab prev button click action
        $('[data-click="prev-tab"]').click(function (e) {
            e.preventDefault();
            handleTabButtonAction(this, 'prev');
        });

        // handle unlimited tabs responsive setting
        $(window).resize(function () {
            $('.tab-overflow .nav.nav-tabs').removeAttr('style');
            handlePageLoadTabFocus();
        });

        handlePageLoadTabFocus();
    }

    /* 18. Handle Mobile Sidebar Scrolling Feature - added in V1.7
------------------------------------------------ */
    public handleMobileSidebar(): void {
        "use strict";
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            if ($('#page-container').hasClass('page-sidebar-minified')) {
                $('#sidebar [data-scrollbar="true"]').css('overflow', 'visible');
                $('.page-sidebar-minified #sidebar [data-scrollbar="true"]').slimScroll();
                $('.page-sidebar-minified #sidebar [data-scrollbar="true"]').removeAttr('style');
                $('.page-sidebar-minified #sidebar [data-scrollbar=true]').trigger('mouseover');
            }
        }

        var oriTouch = 0;
        $('.page-sidebar-minified .sidebar [data-scrollbar=true] a').bind('touchstart', function (e: any) {
            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            var touchVertical = touch.pageY;
            oriTouch = touchVertical - parseInt($(this).closest('[data-scrollbar=true]').css('margin-top'));
        });

        $('.page-sidebar-minified .sidebar [data-scrollbar=true] a').bind('touchmove', function (e: any) {
            e.preventDefault();
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                var touchVertical = touch.pageY;
                var elementTop = touchVertical - oriTouch;

                $(this).closest('[data-scrollbar=true]').css('margin-top', elementTop + 'px');
            }
        });

        $('.page-sidebar-minified .sidebar [data-scrollbar=true] a').bind('touchend', function (e: any) {
            var targetScrollBar = $(this).closest('[data-scrollbar=true]');
            var windowHeight = $(window).height();
            var sidebarTopPosition = parseInt($('#sidebar').css('padding-top'));
            var sidebarContainerHeight = $('#sidebar').height();
            oriTouch = parseInt($(targetScrollBar).css('margin-top'));

            var sidebarHeight = sidebarTopPosition;
            $('.sidebar').not('.sidebar-right').find('.nav').each(function () {
                sidebarHeight += $(this).height();
            });
            var finalHeight = -parseInt(oriTouch.toString()) + $('.sidebar').height();
            if (finalHeight >= sidebarHeight && windowHeight <= sidebarHeight && sidebarContainerHeight <= sidebarHeight) {
                var finalMargin = windowHeight - sidebarHeight - 20;
                $(targetScrollBar).animate({ marginTop: finalMargin + 'px' });
            } else if (parseInt(oriTouch.toString()) >= 0 || sidebarContainerHeight >= sidebarHeight) {
                $(targetScrollBar).animate({ marginTop: '0px' });
            } else {
                finalMargin = oriTouch;
                $(targetScrollBar).animate({ marginTop: finalMargin + 'px' });
            }
        });
    }

    /* 19. Handle Top Menu - Unlimited Top Menu Render - added in V1.9
------------------------------------------------ */
    public handleUnlimitedTopMenuRender(): void {
        "use strict";
        // function handle menu button action - next / prev
        function handleMenuButtonAction(element, direction) {
            var obj = $(element).closest('.nav');
            var marginLeft = parseInt($(obj).css('margin-left'));
            var containerWidth = $('.top-menu').width() - 88;
            var totalWidth = 0;
            var finalScrollWidth = 0;

            $(obj).find('li').each(function () {
                if (!$(this).hasClass('menu-control')) {
                    totalWidth += $(this).width();
                }
            });

            switch (direction) {
                case 'next':
                    var widthLeft = totalWidth + marginLeft - containerWidth;
                    if (widthLeft <= containerWidth) {
                        finalScrollWidth = widthLeft - marginLeft + 128;
                        setTimeout(function () {
                            $(obj).find('.menu-control.menu-control-right').removeClass('show');
                        }, 150);
                    } else {
                        finalScrollWidth = containerWidth - marginLeft - 128;
                    }

                    if (finalScrollWidth != 0) {
                        $(obj).animate({ marginLeft: '-' + finalScrollWidth + 'px' }, 150, function () {
                            $(obj).find('.menu-control.menu-control-left').addClass('show');
                        });
                    }
                    break;
                case 'prev':
                    var widthLeft = -marginLeft;

                    if (widthLeft <= containerWidth) {
                        $(obj).find('.menu-control.menu-control-left').removeClass('show');
                        finalScrollWidth = 0;
                    } else {
                        finalScrollWidth = widthLeft - containerWidth + 88;
                    }
                    $(obj).animate({ marginLeft: '-' + finalScrollWidth + 'px' }, 150, function () {
                        $(obj).find('.menu-control.menu-control-right').addClass('show');
                    });
                    break;
            }
        }

        // handle page load active menu focus
        function handlePageLoadMenuFocus() {
            var targetMenu = $('.top-menu .nav');
            var targetList = $('.top-menu .nav > li');
            var targetActiveList = $('.top-menu .nav > li.active');
            var targetContainer = $('.top-menu');

            var marginLeft = parseInt($(targetMenu).css('margin-left'));
            var viewWidth = $(targetContainer).width() - 128;
            var prevWidth = $('.top-menu .nav > li.active').width();
            var speed = 0;
            var fullWidth = 0;

            $(targetActiveList).prevAll().each(function () {
                prevWidth += $(this).width();
            });

            $(targetList).each(function () {
                if (!$(this).hasClass('menu-control')) {
                    fullWidth += $(this).width();
                }
            });

            if (prevWidth >= viewWidth) {
                var finalScrollWidth = prevWidth - viewWidth + 128;
                $(targetMenu).animate({ marginLeft: '-' + finalScrollWidth + 'px' }, speed);
            }

            if (prevWidth != fullWidth && fullWidth >= viewWidth) {
                $(targetMenu).find('.menu-control.menu-control-right').addClass('show');
            } else {
                $(targetMenu).find('.menu-control.menu-control-right').removeClass('show');
            }

            if (prevWidth >= viewWidth && fullWidth >= viewWidth) {
                $(targetMenu).find('.menu-control.menu-control-left').addClass('show');
            } else {
                $(targetMenu).find('.menu-control.menu-control-left').removeClass('show');
            }
        }

        // handle menu next button click action
        $('[data-click="next-menu"]').click(function (e) {
            e.preventDefault();
            handleMenuButtonAction(this, 'next');
        });

        // handle menu prev button click action
        $('[data-click="prev-menu"]').click(function (e) {
            e.preventDefault();
            handleMenuButtonAction(this, 'prev');
        });

        // handle unlimited menu responsive setting
        $(window).resize(function () {
            $('.top-menu .nav').removeAttr('style');
            handlePageLoadMenuFocus();
        });

        handlePageLoadMenuFocus();
    }

    /* 20. Handle Top Menu - Sub Menu Toggle - added in V1.9
------------------------------------------------ */
    public handleTopMenuSubMenu(): void {
        "use strict";
        $('.top-menu .sub-menu .has-sub > a').click(function () {
            var target = $(this).closest('li').find('.sub-menu').first();
            var otherMenu = $(this).closest('ul').find('.sub-menu').not(target);
            $(otherMenu).not(target).slideUp(250, function () {
                $(this).closest('li').removeClass('expand');
            });
            $(target).slideToggle(250, function () {
                var targetLi = $(this).closest('li');
                if ($(targetLi).hasClass('expand')) {
                    $(targetLi).removeClass('expand');
                } else {
                    $(targetLi).addClass('expand');
                }
            });
        });
    }
    /* 21. Handle Top Menu - Mobile Sub Menu Toggle - added in V1.9
------------------------------------------------ */
    public handleMobileTopMenuSubMenu(): void {
        "use strict";
        $('.top-menu .nav > li.has-sub > a').click(function () {
            if ($(window).width() <= 767) {
                var target = $(this).closest('li').find('.sub-menu').first();
                var otherMenu = $(this).closest('ul').find('.sub-menu').not(target);
                $(otherMenu).not(target).slideUp(250, function () {
                    $(this).closest('li').removeClass('expand');
                });
                $(target).slideToggle(250, function () {
                    var targetLi = $(this).closest('li');
                    if ($(targetLi).hasClass('expand')) {
                        $(targetLi).removeClass('expand');
                    } else {
                        $(targetLi).addClass('expand');
                    }
                });
            }
        });
    }

    /* 22. Handle Top Menu - Mobile Top Menu Toggle - added in V1.9
------------------------------------------------ */
    public handleTopMenuMobileToggle(): void {
        "use strict";
        $('[data-click="top-menu-toggled"]').click(function () {
            $('.top-menu').slideToggle(250);
        });
    }

    /* 23. Handle Clear Sidebar Selection & Hide Mobile Menu - added in V1.9
------------------------------------------------ */
    public handleClearSidebarSelection(): void {
        $('.sidebar .nav > li, .sidebar .nav .sub-menu').removeClass('expand').removeAttr('style');
    };
    public handleClearSidebarMobileSelection(): void {
        $('#page-container').removeClass('page-sidebar-toggled');
    }

    public init(): void {
        this.initSidebar();
        this.initTopMenu();
        this.initPageLoad();
        this.initComponent();
        this.initLocalStorage();
    }

    public initPageLoad(): void {
        this.handlePageContentView();
    }

    public initSidebar(): void {
        this.handleSidebarMenu();
        this.handleMobileSidebarToggle();
        this.handleSidebarMinify();
        this.handleMobileSidebar();
    }

    public initSidebarSelection(): void {
        this.handleClearSidebarSelection();
    }

    public initSidebarMobileSelection(): void {
        this.handleClearSidebarMobileSelection();
    }

    public initTopMenu(): void {
        this.handleUnlimitedTopMenuRender();
        this.handleTopMenuSubMenu();
        this.handleMobileTopMenuSubMenu();
        this.handleTopMenuMobileToggle();
    }

    public initComponent(): void {
        this.handleIEFullHeightContent();
        this.handleSlimScroll();
        this.handleUnlimitedTabsRender();
        this.handlePanelAction();
        this.handelTooltipPopoverActivation();
        this.handleScrollToTopButton();
        this.handleAfterPageLoadAddClass();
        this.handleDraggablePanel();
    }

    public initLocalStorage(): void {
        this.handleLocalStorage();
    }

    public scrollTop(): void {
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 0);
    }
}