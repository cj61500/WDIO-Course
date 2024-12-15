class HomePageSelectors{
get btnGetStarted (){
   return $('#get-started')
}

get sdetULogo(){
    return $('//*[@id="zak-masthead"]/div/div/div/div[1]/div/a')
}
get HomeHeadingElement(){
    return $('.elementor-widget-container h1')
}
}


export default new HomePageSelectors();