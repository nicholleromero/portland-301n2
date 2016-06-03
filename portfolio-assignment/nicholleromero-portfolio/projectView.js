(function(module) {

var projectView = {};

//6-2 work
projectView.populateFilters = function() {

  $('.article').each(function() {

    if (!$(this).hasClass('template')) {

      console.log("no class template");
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#title-filter').append(optionTag);
    }
  });
};

projectView.handleProjectFilter = function() {
  $('#title-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-title= "' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
  });
};

//end 6-2



projectView.handleNav = function() {
  $('.navigation li.tab').on('click', function() {
      var tab_id = $(this).attr('data-content');
      var selectedTab = $('#'+tab_id);
      $('.tab-content').hide();
      selectedTab.show();
  });
  $('.navigation .tab:first').click();
};

projectView.setTeasers = function() {
//  $('.project-body *:nth-of-type(n+2)').hide();
//  debugger
  $('.project-body').hide();
  $('#projects').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};



//$(document).ready(function(){

projectView.init = function() {
  projectView.populateFilters();
  projectView.handleProjectFilter();
  projectView.handleNav();
  projectView.setTeasers();
}
//});



//-----NEW
//
// Project.numWordsAll().forEach(function(stat){
//   $('.project-stats').append(template(stat));
// })

//----END NEW



module.projectView = projectView;

})(window);
