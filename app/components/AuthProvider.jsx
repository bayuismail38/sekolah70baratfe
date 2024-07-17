import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Learning",
  description: "Made With Love",
};

export default function AuthProvider({ children }) {
  return (
    <html lang="en">
    <body class="hold-transition light-skin sidebar-mini theme-primary fixed-manu">
    <div class="wrapper">
        <div id="loader"></div>
        <header class="main-header">
            <div class="flex items-center logo-box justify-start">  
                 <a href="index.html" class="logo">
                      <div class="logo-mini w-40">
                          <span class="light-logo"><img src="../../../images/logo-letter.png" alt="logo" /></span>
                          <span class="dark-logo"><img src="../../../images/logo-white-letter.png" alt="logo" /></span>
                      </div>
                      <div class="logo-lg">
                          <span class="light-logo"><img src="../../../images/logo-light-text.png" alt="logo" /></span>
                          <span class="dark-logo"><img src="../../../images/logo-text.png" alt="logo" /></span>
                      </div>
                 </a>    
            </div>   
            <nav class="navbar navbar-static-top flow-root">
                 <div class="float-left">
                    <ul class="header-megamenu nav flex items-center">
                        <li class="btn-group nav-item inline-flex">
                         <a href="#" class="waves-effect waves-light nav-link push-btn bg-blue-600" data-toggle="push-menu" role="button">
                             <i data-feather="menu"></i>
                         </a>
                        </li>
                        <li class="btn-group inline-flex max-[991px]:hidden min-[992px]:inline-flex">
                         <div class="app-menu">
                             <div class="search-bx mx-5">
                                <form>
                                    <div class="flex input-group">
                                     <input type="search" class="form-control" placeholder="Search" />
                                     <div class="input-group-append">
                                            <button class="btn" type="submit" id="button-addon3"><i class="icon-Search"><span class="path1"></span><span class="path2"></span></i></button>
                                     </div>
                                    </div>
                                </form>
                             </div>
                         </div>
                        </li>
                    </ul> 
                 </div>
             
                <div class="navbar-custom-menu r-side inline-flex items-center float-right">
                     <ul class="nav navbar-nav inline-flex items-center">
                        <li class="dropdown notifications-menu inline-flex rounded-md">
                            <label class="switch">
                                 <a class="waves-effect waves-light btn-primary-light svg-bt-icon">
                                    <input type="checkbox" data-mainsidebarskin="toggle" id="toggle_left_sidebar_skin" />
                                    <span class="switch-on"><i data-feather="moon"></i></span>
                                    <span class="switch-off"><i data-feather="sun"></i></span>
                                 </a>    
                            </label>
                        </li>
                        <li class="dropdown notifications-menu btn-group ">
                             <a id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="btn-primary-light svg-bt-icon hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" title="Notifications" type="button"><div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-[1.4rem] end-[0.7rem] dark:border-gray-900">8</div><i data-feather="bell"></i><div class="pulse-wave"></div>
                             </a>
    
                             <div id="dropdown" class="dropdown-menu z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow !w-max dark:bg-gray-700">
                                     <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                         <li class="header">
                                                <div class="p-20 border-b">
                                                     <div class="flexbox">
                                                            <div>
                                                                 <div class="text-xl mb-0 mt-0">Notifications</div>
                                                            </div>
                                                            <div>
                                                                 <a href="#" class="text-danger">Clear All</a>
                                                            </div>
                                                     </div>
                                                </div>
                                         </li>
                                         <li>
                                                <ul class="menu sm-scrol">
                                                     <li class="border-b">
                                                     <a href="#" class="p-3 block m-0 overflow-hidden text-base whitespace-nowrap text-ellipsis">
                                                         <i class="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
                                                     </a>
                                                    </li>
                                                    <li class="border-b">
                                                     <a href="#" class="p-3 block m-0 overflow-hidden text-base whitespace-nowrap text-ellipsis">
                                                         <i class="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                                                     </a>
                                                    </li>
                                                    <li class="border-b">
                                                     <a href="#" class="p-3 block m-0 overflow-hidden text-base whitespace-nowrap text-ellipsis">
                                                         <i class="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                                                     </a>
                                                    </li>
                                                    <li class="border-b">
                                                     <a href="#" class="p-3 block m-0 overflow-hidden text-base whitespace-nowrap text-ellipsis">
                                                         <i class="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
                                                     </a>
                                                    </li>
                                                    <li class="border-b">
                                                     <a href="#" class="p-3 block m-0 overflow-hidden text-base whitespace-nowrap text-ellipsis">
                                                         <i class="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
                                                     </a>
                                                    </li>
                                                    <li class="border-b">
                                                     <a href="#" class="p-3 block m-0 overflow-hidden text-base whitespace-nowrap text-ellipsis">
                                                         <i class="fa fa-user text-primary"></i> Nunc fringilla lorem 
                                                     </a>
                                                    </li>
                                                    <li class="border-b">
                                                     <a href="#" class="p-3 block m-0 overflow-hidden text-base whitespace-nowrap text-ellipsis">
                                                         <i class="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                                                     </a>
                                                    </li>
                                                </ul>
                                         </li>
                                         <li class="footer p-3 text-center border-t">
                                             <a href="component_notification.html">View all</a>
                                        </li>
                                     </ul>
                             </div>
                        </li>
                        <li class="inline-flex rounded-md nav-item max-[1199px]:hidden min-[1200px]:inline-flex">
                             <a href="#" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="" id="live-chat">
                                 <i data-feather="message-circle"></i>
                             </a>
                        </li>
                        <li class="btn-group max-[1199px]:hidden min-[1200px]:inline-flex">
                             <a href="#" id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="justify-center btn-primary-light hover:text-white svg-bt-icon hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><img class="rounded h-20 w-20" src="https://eduadmin-template.multipurposethemes.com/tailwind/images/svg-icon/usa.svg" alt="" /></a>
    
                             <div id="dropdownDivider" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                     <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 drop-shadow-lg" aria-labelledby="dropdownDividerButton">
                                         <li>
                                             <a href="#" class="m-0 flex px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><img class="w-20 rounded me-10" src="https://eduadmin-template.multipurposethemes.com/tailwind/images/svg-icon/usa.svg" alt="" />English</a>
                                         </li>
                                         <li>
                                             <a href="#" class="m-0 flex px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><img class="w-20 rounded me-10" src="https://eduadmin-template.multipurposethemes.com/tailwind/images/svg-icon/spain.svg" alt="" />Spanish</a>
                                         </li>
                                         <li>
                                             <a href="#" class="m-0 flex px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><img class="w-20 rounded me-10" src="https://eduadmin-template.multipurposethemes.com/tailwind/images/svg-icon/ger.svg" alt="" /> German</a>
                                         </li>
                                         <li>
                                             <a href="#" class="m-0 flex px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><img class="w-20 rounded me-10" src="https://eduadmin-template.multipurposethemes.com/tailwind/images/svg-icon/jap.svg" alt="" /> Japanese</a>
                                         </li>
                                         <li>
                                             <a href="#" class="m-0 flex px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><img class="w-20 rounded me-10" src="https://eduadmin-template.multipurposethemes.com/tailwind/images/svg-icon/fra.svg" alt="" /> French</a>
                                         </li>
                                     </ul>
                             </div>  
                        </li>
                     
                        <li class="inline-flex rounded-md nav-item max-[1199px]:hidden min-[1200px]:inline-flex">
                             <a href="#" data-provide="fullscreen" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="Full Screen">
                                 <i data-feather="maximize"></i>
                             </a>
                        </li>                     
                        <li class="inline-flex rounded-md nav-item max-[1199px]:hidden min-[1200px]:inline-flex">
                             <a href="#" data-toggle="control-sidebar" title="Setting" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon">
                             <i data-feather="sliders"></i>
                             </a>
                        </li>
                     
                        <li class="btn-group d-xl-inline-flex d-none">
                             <a href="#" id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider-2" class="justify-center btn-primary-light hover:text-white svg-bt-icon hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm !px-px !py-px text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><img src="../../../images/avatar/avatar-6.png" class="avatar rounded-full !h-11 !w-11 mt-1" alt="" /></a>
    
                             <div id="dropdownDivider-2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                     <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 drop-shadow-lg" aria-labelledby="dropdownDividerButton">
                                         <li>
                                             <a href="extra_profile.html" class="items-center m-0 text-base flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fa fa-user-circle-o me-3 text-xl" aria-hidden="true"> </i> My Profile</a>
                                         </li>
                                         <li>
                                             <a href="mailbox.html" class="items-center m-0 text-base flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fa fa-envelope-open-o me-3 text-xl" aria-hidden="true"> </i> My Messages</a>
                                         </li>
                                         <li>
                                             <a href="setting.html" class="items-center m-0 text-base flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fa fa-fw fa-gear me-3 text-xl"> </i> Settings</a>
                                         </li>
                                         <li>
                                             <a href="extra_taskboard.html" class="items-center m-0 text-base flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fa fa-fw fa-file-text-o me-3 text-xl"> </i> Project</a>
                                         </li>
                                     </ul>
                             </div>  
                        </li>
                     </ul>
                </div>
            </nav>
        </header>
        
    <aside class="main-sidebar">
        <section class="sidebar position-relative"> 
         <div class="multinav">
             <div class="multinav-scroll" style={{height: "97%"}}>    
                <ul class="sidebar-menu" data-widget="tree">
                <li class="header fs-10 m-0 text-uppercase">Dashboard</li>
                <li class="treeview">
                    <a href="#">
                    <i data-feather="home"></i>
                    <span>Dashboard</span>
                    <span class="pull-right-container">
                     <i class="fa fa-angle-right pull-right"></i>
                    </span>
                    </a>                  
                    <ul class="treeview-menu">                    
                    <li><a href="index.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Dashboard 1</a></li>  
                    <li><a href="index-2.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Dashboard 2</a></li>          
                    </ul>
                </li>
                    
                <li class="header fs-10 m-0 text-uppercase">Components</li>
                <li class="treeview">
                    <a href="#">
                    <i data-feather="edit"></i>
                    <span>Features</span>
                    <span class="pull-right-container">
                     <i class="fa fa-angle-right pull-right"></i>
                    </span>
                    </a>
                    <ul class="treeview-menu">                                            
                    <li class="treeview">
                     <a href="#">
                         <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Card
                         <span class="pull-right-container">
                            <i class="fa fa-angle-right pull-right"></i>
                         </span>
                     </a>
                     <ul class="treeview-menu">
                         <li><a href="box_cards.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>User Card</a></li>
                         <li><a href="box_advanced.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Advanced Card</a></li>
                         <li><a href="box_basic.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Basic Card</a></li>
                         <li><a href="box_color.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Card Color</a></li>
                         <li><a href="box_group.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Card Group</a></li>
                     </ul>
                    </li>                                               
                    <li class="treeview">
                     <a href="#">
                         <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>UI
                         <span class="pull-right-container">
                            <i class="fa fa-angle-right pull-right"></i>
                         </span>
                     </a>
                     <ul class="treeview-menu">
                         <li><a href="ui_grid.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Grid System</a></li>
                         <li><a href="ui_badges.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Badges</a></li>
                         <li><a href="ui_border_utilities.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Border</a></li>
                         <li><a href="ui_buttons.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Buttons</a></li> 
                         <li><a href="ui_color_utilities.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Color</a></li>
                         <li><a href="ui_dropdown.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Dropdown</a></li>
                         <li><a href="ui_dropdown_grid.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Dropdown Grid</a></li>
                         <li><a href="ui_progress_bars.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Progress Bars</a></li>
                     </ul>
                    </li>                                       
                    <li class="treeview">
                     <a href="#">
                         <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Icons
                         <span class="pull-right-container">
                            <i class="fa fa-angle-right pull-right"></i>
                         </span>
                     </a>
                     <ul class="treeview-menu">
                         <li><a href="icons_fontawesome.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Font Awesome</a></li>
                         <li><a href="icons_glyphicons.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Glyphicons</a></li>
                         <li><a href="icons_material.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Material Icons</a></li>  
                         <li><a href="icons_themify.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Themify Icons</a></li>
                         <li><a href="icons_simpleline.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Simple Line Icons</a></li>
                         <li><a href="icons_cryptocoins.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Cryptocoins Icons</a></li>
                         <li><a href="icons_flag.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Flag Icons</a></li>
                         <li><a href="icons_weather.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Weather Icons</a></li>
                     </ul>
                    </li>                                   
                    <li class="treeview">
                     <a href="#">
                         <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Custom UI
                         <span class="pull-right-container">
                            <i class="fa fa-angle-right pull-right"></i>
                         </span>
                     </a>
                     <ul class="treeview-menu">
                         <li><a href="ui_ribbons.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Ribbons</a></li>
                         <li><a href="ui_sliders.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Sliders</a></li>
                         <li><a href="ui_typography.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Typography</a></li>
                         <li><a href="ui_tab.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Tabs</a></li>
                         <li><a href="ui_timeline.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Timeline</a></li>
                         <li><a href="ui_timeline_horizontal.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Horizontal Timeline</a></li>
                     </ul>
                    </li>
                    <li class="treeview">
                     <a href="#">
                         <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Components
                         <span class="pull-right-container">
                            <i class="fa fa-angle-right pull-right"></i>
                         </span>
                     </a>
                     <ul class="treeview-menu">
                         <li><a href="component_switch.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Switch</a></li>
                         <li><a href="component_pagination.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Pagination</a></li>
                         <li><a href="component_media_advanced.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Advanced Medias</a></li>
                         <li><a href="component_rangeslider.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Range Slider</a></li>
                         <li><a href="component_rating.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Ratings</a></li>
                         <li><a href="component_animations.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Animations</a></li>
                         <li><a href="extension_fullscreen.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Fullscreen</a></li>
                         <li><a href="extension_pace.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Pace</a></li>
                         <li><a href="component_nestable.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Nestable</a></li>
                         <li><a href="component_portlet_draggable.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Draggable Portlets</a></li> 
                     </ul>
                    </li>  
                    </ul>
                </li>       
                <li class="treeview">
                    <a href="#">
                    <i data-feather="pie-chart"></i>
                    <span>Forms & Charts</span>
                    <span class="pull-right-container">
                     <i class="fa fa-angle-right pull-right"></i>
                    </span>
                    </a>                  
                    <ul class="treeview-menu">                    
                     <li class="treeview">
                     <a href="#">
                         <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Forms
                         <span class="pull-right-container">
                            <i class="fa fa-angle-right pull-right"></i>
                         </span>
                     </a>
                     <ul class="treeview-menu">
                        <li><a href="forms_advanced.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Form Elements</a></li>
                         <li><a href="forms_wizard.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Form Wizard</a></li>   
                         <li><a href="forms_validation.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Form Validation</a></li>
                         <li><a href="forms_mask.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Formatter</a></li>
                         <li><a href="forms_xeditable.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Xeditable Editor</a></li>
                         <li><a href="forms_dropzone.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Dropzone</a></li>
                         <li><a href="forms_code_editor.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Code Editor</a></li>
                         <li><a href="forms_editors.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Editor</a></li>
                     </ul>
                    </li>   
                    <li class="treeview">
                     <a href="#">
                         <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Charts
                         <span class="pull-right-container">
                            <i class="fa fa-angle-right pull-right"></i>
                         </span>
                     </a>
                     <ul class="treeview-menu">
                         <li><a href="charts_apex.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Apex Chart</a></li>
                         <li><a href="charts_chartjs.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>ChartJS</a></li>
                         <li><a href="charts_flot.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Flot</a></li>
                         <li><a href="charts_inline.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Inline charts</a></li>
                         <li><a href="charts_morris.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Morris</a></li>
                         <li><a href="charts_peity.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Peity</a></li>
                         <li><a href="charts_chartist.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Chartist</a></li>
                         <li class="treeview">
                            <a href="#">
                                <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>C3 Charts
                                <span class="pull-right-container">
                                 <i class="fa fa-angle-right pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="charts_c3_axis.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Axis Chart</a></li>
                                <li><a href="charts_c3_bar.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Bar Chart</a></li>
                                <li><a href="charts_c3_data.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Data Chart</a></li>
                                <li><a href="charts_c3_line.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Line Chart</a></li>
                            </ul>
                         </li>
                         <li class="treeview">
                            <a href="#">
                                <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>eCharts
                                <span class="pull-right-container">
                                 <i class="fa fa-angle-right pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="charts_echarts_basic.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Basic Charts</a></li>
                                <li><a href="charts_echarts_bar.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Bar Chart</a></li>
                                <li><a href="charts_echarts_pie_doughnut.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Pie Chart</a></li>
                            </ul>
                         </li>                           
                     </ul>
                    </li>
                    </ul>
                </li>           
                <li class="treeview">
                    <a href="#">
                    <i data-feather="grid"></i>
                    <span>Tables</span>
                    <span class="pull-right-container">
                     <i class="fa fa-angle-right pull-right"></i>
                    </span>
                    </a>                  
                    <ul class="treeview-menu">                    
                    <li><a href="tables_simple.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Simple tables</a></li>
                    <li><a href="tables_data.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Data tables</a></li>
                    <li><a href="tables_editable.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Editable Tables</a></li>
                    <li><a href="tables_color.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Table Color</a></li>                   
                    </ul>
                </li>                
                <li class="treeview">
                    <a href="#">
                    <i data-feather="database"></i>
                    <span>Apps & Widgets</span>
                    <span class="pull-right-container">
                     <i class="fa fa-angle-right pull-right"></i>
                    </span>
                    </a>
                    <ul class="treeview-menu">                    
                    <li class="treeview">
                     <a href="#">
                         <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Apps
                         <span class="pull-right-container">
                            <i class="fa fa-angle-right pull-right"></i>
                         </span>
                     </a>
                     <ul class="treeview-menu">
                         <li><a href="contact_app.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Contact List</a></li>
                         <li><a href="extra_taskboard.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Todo</a></li>
                         <li><a href="mailbox.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Mailbox</a></li>
                     </ul>
                    </li>                                       
                    <li class="treeview">
                     <a href="#">
                         <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Widgets
                         <span class="pull-right-container">
                            <i class="fa fa-angle-right pull-right"></i>
                         </span>
                     </a>
                     <ul class="treeview-menu">
                         <li class="treeview">
                            <a href="#">
                                <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Custom
                                <span class="pull-right-container">
                                 <i class="fa fa-angle-right pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="widgets_blog.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Blog</a></li>
                                <li><a href="widgets_chart.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Chart</a></li>
                                <li><a href="widgets_list.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>List</a></li>
                                <li><a href="widgets_social.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Social</a></li>
                                <li><a href="widgets_statistic.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Statistic</a></li>	
                                <li><a href="widgets_weather.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Weather</a></li>
                                <li><a href="widgets.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Widgets</a></li>
                                <li><a href="email_index.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Emails</a></li> 
                            </ul>
                         </li>                                               
                         <li class="treeview">
                            <a href="#">
                                <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Maps
                                <span class="pull-right-container">
                                 <i class="fa fa-angle-right pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="map_google.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Google Map</a></li>
                                <li><a href="map_vector.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Vector Map</a></li>
                            </ul>
                         </li>                       
                         <li class="treeview">
                            <a href="#">
                                <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Modals
                                <span class="pull-right-container">
                                 <i class="fa fa-angle-right pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="component_modals.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Modals</a></li>
                                <li><a href="component_sweatalert.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Sweet Alert</a></li>
                                <li><a href="component_notification.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Toastr</a></li>
                            </ul>
                         </li> 
                     </ul>
                    </li>                   
                    <li class="treeview">
                     <a href="#">
                         <i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Sample Pages
                         <span class="pull-right-container">
                            <i class="fa fa-angle-right pull-right"></i>
                         </span>
                     </a>
                     <ul class="treeview-menu">
                         <li><a href="invoice.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Invoice</a></li>
                         <li><a href="invoice_2.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Invoice 2</a></li>
                         <li><a href="invoicelist.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Invoice List</a></li>
                         <li><a href="invoicelist_2.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Invoice List 2</a></li>   
                         <li><a href="contact_userlist.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Userlist</a></li>  
                         <li><a href="sample_faq.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>FAQs</a></li>
                         <li><a href="sample_blank.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Blank</a></li>
                         <li><a href="sample_coming_soon.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Coming Soon</a></li>
                         <li><a href="sample_custom_scroll.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Custom Scrolls</a></li>
                         <li><a href="sample_gallery.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Gallery</a></li>
                         <li><a href="sample_lightbox.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Lightbox Popup</a></li>
                         <li><a href="sample_pricing.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Pricing</a></li>
                     </ul>
                    </li>
                    </ul>
                </li>  
    
                <li class="treeview">
                    <a href="#">
                    <i data-feather="headphones"></i>
                    <span>Support</span>
                    <span class="pull-right-container">
                     <i class="fa fa-angle-right pull-right"></i>
                    </span>
                    </a>                  
                    <ul class="treeview-menu">                    
                    <li><a href="extra_app_ticket.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Support Ticket</a></li>
                    <li><a href="contact_app_chat.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Chat</a></li>                  
                    </ul>
                </li>
    
                <li class="header  fs-10 m-0">LOGIN & ERROR</li>
                 <li class="treeview">
                    <a href="#">
                    <i data-feather="lock"></i>
                    <span>Authentication</span>
                    <span class="pull-right-container">
                     <i class="fa fa-angle-right pull-right"></i>
                    </span>
                    </a>
                    <ul class="treeview-menu">
                    <li>
                     <a href="auth_login.html" target="_blank" class="d-light"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Login</a>
                     <a href="auth_login_dark.html" target="_blank" class="d-dark"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Login</a>
                    </li>
                    <li>
                     <a href="auth_register.html" target="_blank" class="d-light"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Register</a>
                     <a href="auth_register_dark.html" target="_blank" class="d-dark"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Register</a>
                    </li>
                    <li>
                     <a href="auth_lockscreen.html" target="_blank" class="d-light"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Lockscreen</a>
                     <a href="auth_lockscreen_dark.html" target="_blank" class="d-dark"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Lockscreen</a>
                    </li>
                    <li>
                     <a href="auth_user_pass.html" target="_blank" class="d-light"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Recover password</a>
                     <a href="auth_user_pass_dark.html" target="_blank" class="d-dark"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Recover password</a>
                    </li>   
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                    <i data-feather="alert-triangle"></i>
                    <span>Miscellaneous</span>
                    <span class="pull-right-container">
                     <i class="fa fa-angle-right pull-right"></i>
                    </span>
                    </a>
                    <ul class="treeview-menu">
                    <li>
                     <a href="error_404.html" target="_blank" class="d-light"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Error 404</a>
                     <a href="error_404_dark.html" target="_blank" class="d-dark"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Error 404</a>
                    </li>
                    <li>
                     <a href="error_500.html" target="_blank" class="d-light"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Error 500</a>
                     <a href="error_500_dark.html" target="_blank" class="d-dark"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Error 500</a>
                    </li>
                    <li>
                     <a href="error_maintenance.html" target="_blank" class="d-light"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Maintenance</a>
                     <a href="error_maintenance_dark.html" target="_blank" class="d-dark"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Maintenance</a>
                    </li>   
                    </ul>
                </li>            
                </ul>
                
                <div class="sidebar-widgets">
                    <div class="mx-25 mb-30 py-5 bg-primary-light rounded-xl">
                    <div class="text-center">
                     <img src="../../../images/gadget_people_800x600.gif" class="sideimg p-5 rounded-5" alt="" />
                     <div class="title-bx text-primary">EduAdmin</div>
                    </div>
                    </div>
                </div>
             </div>
         </div>
        </section>
    
        </aside>
        {children}
        
        <footer class="main-footer bt-1">
            <div class="pull-right max-[575px]:hidden min-[576px]:inline-flex">
                 <ul class="nav nav-primary nav-dotted nav-dot-separated justify-center justify-content-md-end">
                    <li class="nav-item">
                         <a class="nav-link text-blue-500 hover:text-gray-500" href="#" target="_blank">Purchase Now</a>
                    </li>
                 </ul>
            </div>
             &copy; <script>document.write(new Date().getFullYear())</script> <a href="https://www.multipurposethemes.com/">Multipurpose Themes</a>. All Rights Reserved.
        </footer>
         <aside class="control-sidebar">
            <div class="rpanel-title"><span class="pull-right btn btn-circle btn-danger text-center" data-toggle="control-sidebar"><i class="ion ion-close text-white" ></i></span> </div>  
             <ul class="nav nav-tabs control-sidebar-tabs" data-tabs-toggle="#myTabContent" role="tablist">
    
                 <li class="nav-item !pr-5" role="presentation">
                     <a id="#control-sidebar-theme-demo-options-tab" data-tabs-target="#control-sidebar-theme-demo-options" aria-controls="control-sidebar-theme-demo-options" data-tab-toggle="tab" role="tab">
                         <i class="mdi mdi-settings"></i>
                     </a>
                 </li>
    
    
                <li class="nav-item !pr-5" role="presentation">
                    <a id="#control-sidebar-home-tab" data-tabs-target="#control-sidebar-home" aria-controls="control-sidebar-home" data-tab-toggle="tab" role="tab">
                        <i class="mdi mdi-message-text"></i>
                    </a>
                </li>
                <li class="nav-item" role="presentation"><a id="#control-sidebar-settings-tab" data-tabs-target="#control-sidebar-settings" aria-controls="control-sidebar-settings" data-tab-toggle="tab" role="tab"><i class="mdi mdi-playlist-check"></i></a></li>
             </ul>
            <div class="tab-content" id="myTabContent">
    
                <div class="tab-pane" id="control-sidebar-theme-demo-options"  role="tabpanel" aria-labelledby="control-sidebar-theme-demo-options-tab">
                    <div>
                        <div class="control-sidebar-heading p-0"></div>
                        <div class="flexbox mb-10 pb-10 bb-1 light-on-off">
                            <label for="toggle_left_sidebar_skin" class="control-sidebar-subheading">Dark or Light Skin</label>
                            <label class="switch">
                                <input type="checkbox" data-mainsidebarskin="toggle" id="toggle_left_sidebar_skin" />
                                <span class="switch-on fs-30">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon" >
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                </span>
                                <span class="switch-off fs-30">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div class="control-sidebar-heading p-0">
                        </div>
                        <div class="flexbox mb-10 pb-10 bb-1">
                            <label for="rtl" class="control-sidebar-subheading">Turn RTL/LTR</label>
                            <label class="switch switch-border switch-danger">
                                <input type="checkbox" data-layout="rtl" id="rtl" />
                                <span class="switch-indicator"></span>
                                <span class="switch-description"></span>
                            </label>
                        </div>
                        <div class="control-sidebar-heading p-0"></div>
                        <div class="flexbox mb-10">
                            <label for="toggle_sidebar" class="control-sidebar-subheading">Toggle Sidebar</label>
                            <label class="switch switch-border switch-danger">
                                <input type="checkbox" data-layout="sidebar-collapse" id="toggle_sidebar" />
                                <span class="switch-indicator"></span>
                                <span class="switch-description"></span>
                            </label>
                        </div>
                        <div class="flexbox mb-10">
                            <label for="toggle_right_sidebar" class="control-sidebar-subheading">Toggle Right Sidebar Slide</label>
                            <label class="switch switch-border switch-danger">
                                <input type="checkbox" data-controlsidebar="control-sidebar-open" id="toggle_right_sidebar" />
                                <span class="switch-indicator"></span><span class="switch-description"></span>
                            </label>
                        </div>
                        <div class="control-sidebar-heading">Skin Colors</div>
                        <ul class="list-unstyled clearfix theme-switch">
                            <li style={{padding: "5px"}}>
                                <a href="javascript:void(0)" data-theme="theme-primary" style={{background: "#4d7cff", display: "block",verticalAlign: "middle"}} class="clearfix rounded w-p100 h-30 mb-5" title="Theme primary"></a>
                            </li>
                            <li style={{padding: "5px"}}>
                                <a href="javascript:void(0)" data-theme="theme-info" style={{background: "#733aeb", display: "block",verticalAlign: "middle"}} class="clearfix rounded w-p100 h-30 mb-5" title="Theme info"></a>
                            </li>
                            <li style={{padding: "5px"}}>
                                <a href="javascript:void(0)" data-theme="theme-success" style={{background:" #51ce8a", display: "block",verticalAlign: "middle"}} class="clearfix rounded w-p100 h-30 mb-5" title="Theme success"></a>
                            </li>
                            <li style={{padding: "5px"}}>
                                <a href="javascript:void(0)" data-theme="theme-danger" style={{background: "#f2426d;", display: "block",verticalAlign: "middle"}} class="clearfix rounded w-p100 h-30 mb-5" title="Theme danger"></a>
                            </li>
                            <li style={{padding: "5px"}}><a href="javascript:void(0)" dataTheme="theme-warning" style={{background: "#fec801", display: "block",verticalAlign: "middle"}} class="clearfix rounded w-p100 h-30 mb-5" title="Theme warning"></a>
                            </li>
                        </ul>
                    </div>
                </div>
    
                <div class="tab-pane" id="control-sidebar-home" role="tabpanel" aria-labelledby="control-sidebar-home-tab">
                    <div class="flexbox">
                         <a href="javascript:void(0)" class="text-grey">
                            <i class="ti-more"></i>
                         </a>    
                         <p>Users</p>
                         <a href="javascript:void(0)" class="text-end text-grey"><i class="ti-plus"></i></a>
                    </div>
                    <div class="lookup lookup-sm lookup-right d-none d-lg-block">
                         <input type="text" name="s" placeholder="Search" class="w-p100" />
                    </div>
                    <div class="media-list media-list-hover mt-20">
                    <div class="media py-10 px-0">
                        <a class="avatar avatar-lg status-success" href="#">
                            <img src="../../../images/avatar/1.html" alt="..." />
                        </a>
                        <div class="media-body">
                            <p class="text-base">
                                <a class="hover-primary" href="#"><strong>Tyler</strong></a>
                            </p>
                            <p>Praesent tristique diam...</p>
                            <span>Just now</span>
                        </div>
                     </div>
    
                     <div class="media py-10 px-0">
                        <a class="avatar avatar-lg status-danger" href="#">
                            <img src="../../../images/avatar/2.html" alt="..." />
                        </a>
                        <div class="media-body">
                            <p class="text-base">
                                <a class="hover-primary" href="#"><strong>Luke</strong></a>
                            </p>
                            <p>Cras tempor diam ...</p>
                            <span>33 min ago</span>
                        </div>
                     </div>
    
                     <div class="media py-10 px-0">
                        <a class="avatar avatar-lg status-warning" href="#">
                            <img src="../../../images/avatar/3.html" alt="..." />
                        </a>
                        <div class="media-body">
                            <p class="text-base">
                                <a class="hover-primary" href="#"><strong>Evan</strong></a>
                            </p>
                            <p>In posuere tortor vel...</p>
                            <span>42 min ago</span>
                        </div>
                     </div>
    
                     <div class="media py-10 px-0">
                        <a class="avatar avatar-lg status-primary" href="#">
                            <img src="../../../images/avatar/4.html" alt="..." />
                        </a>
                        <div class="media-body">
                            <p class="text-base">
                                <a class="hover-primary" href="#"><strong>Evan</strong></a>
                            </p>
                            <p>In posuere tortor vel...</p>
                            <span>42 min ago</span>
                        </div>
                     </div>          
                     
                     <div class="media py-10 px-0">
                        <a class="avatar avatar-lg status-success" href="#">
                            <img src="../../../images/avatar/1.html" alt="..." />
                        </a>
                        <div class="media-body">
                            <p class="text-base">
                                <a class="hover-primary" href="#"><strong>Tyler</strong></a>
                            </p>
                            <p>Praesent tristique diam...</p>
                            <span>Just now</span>
                        </div>
                     </div>
    
                     <div class="media py-10 px-0">
                        <a class="avatar avatar-lg status-danger" href="#">
                            <img src="../../../images/avatar/2.html" alt="..." />
                        </a>
                        <div class="media-body">
                            <p class="text-base">
                                <a class="hover-primary" href="#"><strong>Luke</strong></a>
                            </p>
                            <p>Cras tempor diam ...</p>
                            <span>33 min ago</span>
                        </div>
                     </div>
    
                     <div class="media py-10 px-0">
                        <a class="avatar avatar-lg status-warning" href="#">
                            <img src="../../../images/avatar/3.html" alt="..." />
                        </a>
                        <div class="media-body">
                            <p class="text-base">
                                <a class="hover-primary" href="#"><strong>Evan</strong></a>
                            </p>
                            <p>In posuere tortor vel...</p>
                            <span>42 min ago</span>
                        </div>
                     </div>
    
                     <div class="media py-10 px-0">
                        <a class="avatar avatar-lg status-primary" href="#">
                            <img src="../../../images/avatar/4.html" alt="..." />
                        </a>
                        <div class="media-body">
                            <p class="text-base">
                                <a class="hover-primary" href="#"><strong>Evan</strong></a>
                            </p>
                            <p>In posuere tortor vel...</p>
                            <span>42 min ago</span>
                        </div>
                     </div>
                        
                     </div>
                </div>
                <div class="tab-pane" id="control-sidebar-settings" role="tabpanel" aria-labelledby="control-sidebar-settings-tab">
                     <div class="flexbox">
                         <a href="javascript:void(0)" class="text-grey">
                            <i class="ti-more"></i>
                         </a>    
                         <p>Todo List</p>
                         <a href="javascript:void(0)" class="text-end text-grey"><i class="ti-plus"></i></a>
                     </div>
                    <ul class="todo-list mt-20">
                         <li class="py-15 px-5 by-1">
                            <input type="checkbox" id="basic_checkbox_1" class="filled-in" />
                            <label for="basic_checkbox_1" class="mb-0 h-15"></label>
                            <span class="text-line">Nulla vitae purus</span>
                            <small class="badge bg-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
                            <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                            </div>
                         </li>
                         <li class="py-15 px-5">
                            <input type="checkbox" id="basic_checkbox_2" class="filled-in" />
                            <label for="basic_checkbox_2" class="mb-0 h-15"></label>
                            <span class="text-line">Phasellus interdum</span>
                            <small class="badge bg-info"><i class="fa fa-clock-o"></i> 4 hours</small>
                            <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                            </div>
                         </li>
                         <li class="py-15 px-5 by-1">
                            <input type="checkbox" id="basic_checkbox_3" class="filled-in" />
                            <label for="basic_checkbox_3" class="mb-0 h-15"></label>
                            <span class="text-line">Quisque sodales</span>
                            <small class="badge bg-warning"><i class="fa fa-clock-o"></i> 1 day</small>
                            <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                            </div>
                         </li>
                         <li class="py-15 px-5">
                            <input type="checkbox" id="basic_checkbox_4" class="filled-in" />
                            <label for="basic_checkbox_4" class="mb-0 h-15"></label>
                            <span class="text-line">Proin nec mi porta</span>
                            <small class="badge bg-success"><i class="fa fa-clock-o"></i> 3 days</small>
                            <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                            </div>
                         </li>
                         <li class="py-15 px-5 by-1">
                            <input type="checkbox" id="basic_checkbox_5" class="filled-in" />
                            <label for="basic_checkbox_5" class="mb-0 h-15"></label>
                            <span class="text-line">Maecenas scelerisque</span>
                            <small class="badge bg-primary"><i class="fa fa-clock-o"></i> 1 week</small>
                            <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                            </div>
                         </li>
                         <li class="py-15 px-5">
                            <input type="checkbox" id="basic_checkbox_6" class="filled-in" />
                            <label for="basic_checkbox_6" class="mb-0 h-15"></label>
                            <span class="text-line">Vivamus nec orci</span>
                            <small class="badge bg-info"><i class="fa fa-clock-o"></i> 1 month</small>
                            <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                            </div>
                         </li>
                         <li class="py-15 px-5 by-1">
                            <input type="checkbox" id="basic_checkbox_7" class="filled-in" />
                            <label for="basic_checkbox_7" class="mb-0 h-15"></label>
                            <span class="text-line">Nulla vitae purus</span>
                            <small class="badge bg-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
                            <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                            </div>
                         </li>
                         <li class="py-15 px-5">
                            <input type="checkbox" id="basic_checkbox_8" class="filled-in"/>
                            <label for="basic_checkbox_8" class="mb-0 h-15"></label>
                            <span class="text-line">Phasellus interdum</span>
                            <small class="badge bg-info"><i class="fa fa-clock-o"></i> 4 hours</small>
                            <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                            </div>
                         </li>
                         <li class="py-15 px-5 by-1">
                            <input type="checkbox" id="basic_checkbox_9" class="filled-in" />
                            <label for="basic_checkbox_9" class="mb-0 h-15"></label>
                            <span class="text-line">Quisque sodales</span>
                            <small class="badge bg-warning"><i class="fa fa-clock-o"></i> 1 day</small>
                            <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                            </div>
                         </li>
                         <li class="py-15 px-5">
                            <input type="checkbox" id="basic_checkbox_10" class="filled-in" />
                            <label for="basic_checkbox_10" class="mb-0 h-15"></label>
                            <span class="text-line">Proin nec mi porta</span>
                            <small class="badge bg-success"><i class="fa fa-clock-o"></i> 3 days</small>
                            <div class="tools">
                                <i class="fa fa-edit"></i>
                                <i class="fa fa-trash-o"></i>
                            </div>
                         </li>
                    </ul>
                </div>
            </div>
        </aside>
        <div class="control-sidebar-bg"></div> 
    </div>
        <div id="chat-box-body">
            <div id="chat-circle" class="waves-effect waves-circle btn btn-circle btn-sm btn-warning l-h-50">
                <div id="chat-overlay"></div>
                <span class="icon-Group-chat fs-18"><span class="path1"></span><span class="path2"></span></span>
            </div>
    
            <div class="chat-box">
                <div class="chat-box-header p-15 flex justify-between items-center">
                    <div class="btn-group">
                        <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider-3" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><span class="icon-Add-user fs-22"><span class="path1"></span><span class="path2"></span></span></button>
    
                        <div id="dropdownDivider-3" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                                <li>
                                    <a href="#" class="block text-base px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> <span class="icon-Color me-15"></span>New Group</a>
                                </li>
                                <li>
                                    <a href="#" class="block text-base px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span class="icon-Clipboard me-15"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="patdiv"></span></span>Contacts</a>
                                </li>
                                <li>
                                    <a href="#" class="block text-base px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span class="icon-Group me-15"><span class="path1"></span><span class="path2"></span></span>Groups</a>
                                </li>
                                <li>
                                    <a href="#" class="block text-base px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span class="icon-Active-call me-15"><span class="path1"></span><span class="path2"></span></span>Calls</a>
                                </li>
                                <li>
                                    <a href="#" class="block text-base px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span class="icon-Settings1 me-15"><span class="path1"></span><span class="path2"></span></span>Settings</a>
                                </li>
                            </ul>
                            <div class="py-2">
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span class="icon-Question-circle me-15"><span class="path1"></span><span class="path2"></span></span>Help</a>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><span class="icon-Notifications me-15"><span class="path1"></span><span class="path2"></span></span>Privacy</a>
                            </div>
                        </div>
                    </div>
                    <div class="text-center flex-grow-1">
                        <div class="text-dark fs-18">Mayra Sibley</div>
                        <div>
                            <span class="badge badge-sm badge-dot badge-primary"></span>
                            <span class="text-muted text-sm">Active</span>
                        </div>
                    </div>
                    <div class="chat-box-toggle">
                        <button id="chat-box-toggle" class="waves-effect waves-circle btn btn-circle btn-danger-light h-40 w-40 rounded-full l-h-50" type="button">
                          <span class="icon-Close fs-22"><span class="path1"></span><span class="path2"></span></span>
                        </button>                    
                    </div>
                </div>
                <div class="chat-box-body">
                    <div class="chat-box-overlay">   
                    </div>
                    <div class="chat-logs">
                        <div class="chat-msg user">
                            <div class="flex items-center">
                                <span class="msg-avatar">
                                    <img src="../../../images/avatar/2.html" class="avatar avatar-lg" alt=""/>
                                </span>
                                <div class="mx-10">
                                    <a href="#" class="text-dark hover-primary fw-bold">Mayra Sibley</a>
                                    <p class="text-muted text-sm mb-0">2 Hours</p>
                                </div>
                            </div>
                            <div class="cm-msg-text">
                                Hi there, I'm Jesse and you?
                            </div>
                        </div>
                        <div class="chat-msg self">
                            <div class="flex items-center justify-end">
                                <div class="mx-10">
                                    <a href="#" class="text-dark hover-primary fw-bold">You</a>
                                    <p class="text-muted text-sm mb-0">3 minutes</p>
                                </div>
                                <span class="msg-avatar">
                                    <img src="../../../images/avatar/3.html" class="avatar avatar-lg" alt=""/>
                                </span>
                            </div>
                            <div class="cm-msg-text">
                               My name is Anne Clarc.         
                            </div>        
                        </div>
                        <div class="chat-msg user">
                            <div class="flex items-center">
                                <span class="msg-avatar">
                                    <img src="../../../images/avatar/2.html" class="avatar avatar-lg" alt="" />
                                </span>
                                <div class="mx-10">
                                    <a href="#" class="text-dark hover-primary fw-bold">Mayra Sibley</a>
                                    <p class="text-muted text-sm mb-0">40 seconds</p>
                                </div>
                            </div>
                            <div class="cm-msg-text">
                                Nice to meet you Anne.<br/>How can i help you?
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat-input">      
                    <form>
                        <input type="text" id="chat-input" placeholder="Send a message..."/>
                        <button type="submit" class="chat-submit" id="chat-submit">
                            <span class="icon-Send fs-22"></span>
                        </button>
                    </form>      
                </div>
            </div>
        </div>        
    </body>
    </html>
  );
}
