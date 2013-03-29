/*
====================================================================
 Blackbaud ISD Custom Part
--------------------------------------------------------------------
 Part Name: 	Theme Caddy
 Author(s): 	Steve Brush [SB]
 Product(s):	Spark, BBNC 6.45
 Version:		1.5
 Created: 		05/21/2012
 Updated:		

-------------------------------------------------------------------- 
 SETUP: 
==================================================================== 
 Include the following in an Unformatted Text part:
 PAGES:
 	<script src="http://developer.guidecreative.com/scripts/SparkCaddy/v1/themeCaddy.min.js"></script>
	<script>ThemeCaddy.Methods.init('page');</script>
 
 EMAIL:
 	<script src="http://developer.guidecreative.com/scripts/SparkCaddy/v1/themeCaddy.min.js"></script>
	<script>ThemeCaddy.Methods.init('email');</script>
 
-------------------------------------------------------------------- 
 Changelog: 
====================================================================
 11/20/2012		Updated script to account for same-domain policy for SOAP request [SB]
 03/25/2013		Updated email templates to 2013 [SB]
 				Updated HTML for forgotten password email
 				Changed the subject title for Event Registration Classic email
 				Updated donation button styling and linkage in Theme 2
 				Removed the gradient from the hover state of the main navigation
====================================================================
*/

var ThemeCaddy = {

	Config: {
		isEditView: !!window.location.href.match('pagedesign')
	},
	
	Elements: {
		allHeadings: 		'h1, h2, h3, h4, h5, h6',
		h1: 				'#contentPrimary h1, *.SurveyTitle, *.ReportTitle, *.NCC_Forms_Title, *.SearchFormTitle,*.EventCalendarName,*.BBMembershipFormTitle,*.BBDocumentFormTitle,*.DiscussionGroupFormTitle,*.JobBoardFormTitle, *.ReportTitle',
		h2: 				'#contentPrimary h2, *.LoginSectionHeader, *.LoginFormTitle, *.DonationListingHeading, *.DonationCaptureListingHeading, *.CalendarFormLegend, *.ListViewDateLabel, *.CalendarViewTopMiddle, *.EventSectionHeader, *.DetailCaption,*.NewsReaderFormTitle, *.ProfileFormTitle, *.UpcomingEventTitle, *.RecentEventTitle, *.SubscriptionFormTitle, *.BBAnonymousSubscriptionTitle, *.BBMembershipFormTitle, *.DirectoryFormTitle, *.BBVolOpJobListTitle, *.BBVolOpJobDetailTitle, *.NewsChannelFormTitle, *.PostChannelStoryFormTitle, *.SpellFormTitle, *.BBPollsFormTitle, *.BBNotesTitle, *.ECardWizardHeading, *.ReportsLandingTable caption, *.DiscussionGroupHeadingText, *.SearchJobHeading, *.JobResultsHeading',
		h3: 				'#contentPrimary h3, *.ListViewEventDate, *.EventItemTitleTime, *.EventItemTitleName, *.EventItemRegistrationsHeader, *.EventItemRegistrantsEventName, *.NewsChannelItemTitle, *.ReportListingHeading, .myHomeBox th.right',
		h4: 				'#contentPrimary h4, #contentSecondary h4',
		text:				'body, *.ListViewEventSubtitle, *.ListViewEventTime, *.ListViewEventLocation, *.BBFormSelectList, *.BBFormTextArea, *.BBFormTextbox, *.DiscussionGroupMessage, *.DiscussionGroupHeadingText, *.DiscussionTopicListHeader, *.BBNotesTextBox, #wrapFooter h3, *.EventItemTitleDescription',
		link:				'#contentPrimary a, *.JobBoardSearchLink:link, *.JobBoardSearchLink:visited, *.JobBoardPostLink:link, *.JobBoardPostLink:visited, *.JobDetailLink:link, *.JobDetailLink:visited, *.JobResultsLink:link, *.JobResultsLink:visited, *.DiscussionFooterLink:link, *.DiscussionFooterLink:visited, *.DiscussionTopicLink:link, *.DiscussionTopicLink:visited, *.BBNameLink:link, *.BBNameLink:visited, table.ReportFormTable legend',
		linkHover:			'#contentPrimary a.hover, #contentPrimary a:hover, *.JobBoardSearchLink:hover, *.JobBoardPostLink:hover, *.JobDetailLink:hover, *.JobResultsLink:hover, *.DiscussionFooterLink:hover, *.DiscussionTopicLink:hover, *.BBNameLink:hover',
		utilityNavLink:		'#headerUtility .menu a',
		mainNavBG: 			'#wrapNav, .BBModalDialogTitle, .CHDashBoardSectionHeading, .ECardSectionSeparator, .CalendarViewDayHeader, .FRDashBoardSectionHeading, .FRManagerDashBoardSectionHeading, .TransactionManagerGridHeaderCell, .TransactionManagerSummaryHeaderRow, .DirectoryListingHeading, .DiscussionTopicListHeader td, .SurveyAnswerTableHeaderRow td, .BBDocumentDisplayHeaderRow, .JobResultsListHeader, .BBNotesNoteTopicCell, .BBNotesNoteNameCell, .BBNotesNoteLinkCell, .BBNotesNoteDateCell, .ReportListingHeading, .BBVolOpJobListHeader, .TransactionManagerGridHeaderCell, .TransactionManagerSummaryHeaderLabel, .TransactionManagerSummaryHeaderValue, .BBVolOpJobListHeader td, .DonationGridHeader td, .PaymentPartGrid_Header',
		mainNavGradient:	'#wrapNav .gradient, #wrapNav .menu li:hover a, #wrapNav .menu li a.selected',
		mainNavLink: 		'#wrapNav li a, #wrapNav, .BBModalDialogTitle, .CHDashBoardSectionHeading, .ECardSectionSeparator, .CalendarViewDayHeader, .FRDashBoardSectionHeading, .FRManagerDashBoardSectionHeading, .TransactionManagerGridHeaderCell, .TransactionManagerSummaryHeaderRow, .DirectoryListingHeading, .DiscussionTopicListHeader td, .SurveyAnswerTableHeaderRow td, .BBDocumentDisplayHeaderRow, .JobResultsListHeader, .BBNotesNoteTopicCell, .BBNotesNoteNameCell, .BBNotesNoteLinkCell, .BBNotesNoteDateCell, .ReportListingHeading, .BBVolOpJobListHeader, .TransactionManagerGridHeaderCell, .TransactionManagerSummaryHeaderLabel, .TransactionManagerSummaryHeaderValue, .BBVolOpJobListHeader td, .DonationGridHeader td, .PaymentPartGrid_Header',
		mainNavLinkHover:	'#wrapNav .menu li.selected a, #wrapNav .menu li:hover a, #wrapNav .menu li a.selected, #wrapNav .menu li:hover, #wrapNav .menu li.selected',
		mainNavBorder: 		'#wrapNav li',
		sideNavLink:		'#contentSecondary .internalMenu a',
		sideNavLinkHover:	'#contentSecondary .internalMenu .selected a, #contentSecondary .internalMenu a:hover, #contentSecondary .internalMenu .hover a',
		
		// Theme 1:
		header1:			'#wrapHeader',
		footer1:			'#wrapFooter, #wrapFooter p, #wrapFooter a',
		
		// Theme 2:
		header2:			'#wrapHeader',
		donateButtonText:	'#donateButton a',
		donateButton:		'#donateButton',
		donateButtonHover:	'#donateButton a.hover, #donateButton a:hover',
		canvas2:			'#BodyId, #internal',
		footer2:			'#wrapFooter, .footerContactWrap p, #wrapFooter a',
		
		// Theme 3:
		header3:			'#wrapHeader',
		titleBar:			'#headerBanner',
		titleBarText:		'#headerBanner .title, #headerBanner h1',
		canvas3:			'#internal, #BodyId',
		footer3:			'#wrapFooter, #wrapFooter a, #wrapFooter p',
		
		styleFixes:			'.myHomeBox th.left,.myHomeBox th.right{background:transparent;color:#333;border-bottom:2px solid #333;}.DetailCaptionContainer,.UpcomingEventContainer{background:transparent}#headerBanner{height:auto;padding:20px;}#headerBanner h1,#headerBanner .title{padding:0;}'
	},
	
	Templates: {
			
		tool: '<div id="ThemeEditor"><style id="savedStyles"></style><div id="sideBar"><div class="gutter"><div id="tabs3"><ul><li><a href="#tabs-1">Text</a></li><li><a href="#tabs-2">Menus</a></li><li><a href="#tabs-3">Head/Foot</a></li><li><a href="#tabs-4">+</a></li></ul><div id="tabs-1"><div id="allHeadings" class="elementWrap clearfix primary"><div class="titleWrap">Headings</div><div class="left"><div class="inputWrap"><input type="hidden" id="storage_allHeadings" value="" /><input type="hidden" class="elements" value="${allHeadings}" /></div></div><div class="fontWrap"><dl class="fontList" elements="h1, h2, h3, h4, h5, h6"><dt><a href="#">Select a font</a></dt><dd><ul><li style="font-family:Arial,Helvetica,sans-serif!important"><a href="#">Arial / Helvetica</a></li><li style="font-family:Baskerville,Palatino Linotype,Palatino,Times New Roman,serif!important"><a href="#">Baskerville / Palatino Linotype</a></li><li style="font-family:Century Gothic,Apple Gothic,URW Gothic L,sans-serif!important"><a href="#">Century Gothic / Apple Gothic</a></li><li style="font-family:Courier New,Courier,Andale Mono,monospace!important"><a href="#">Courier New / Courier</a></li><li style="font-family:Georgia,Times New Roman,Times,serif!important"><a href="#">Georgia / Times New Roman</a></li><li style="font-family:Gill Sans,Gill Sans MT,Helvetica,Arial,sans-serif!important"><a href="#">Gill Sans / Gill Sans MT</a></li><li style="font-family:Impact,Haettenschweiler,Arial Narrow Bold,Charcoal,sans-serif!important"><a href="#">Impact / Haettenschweiler</a></li><li style="font-family:Lucida Sans,Lucida Grande,Lucida Sans Unicode,Trebuchet MS,sans-serif!important"><a href="#">Lucida sans / Lucida Grande</a></li><li style="font-family:Palatino,Palatino Linotype,URW Palladio L,Georgia,Times New Roman,Times,serif!important"><a href="#">Palatino / Palatino Linotype</a></li><li style="font-family:Tahoma,Geneva,Verdana,sans-serif!important"><a href="#">Tahoma / Geneva</a></li><li style="font-family:Times New Roman,Times,serif!important"><a href="#">Times New Roman / Times</a></li><li style="font-family:Trebuchet MS,Lucida Sans,Lucida Grande,Lucida Sans Unicode,sans-serif!important"><a href="#">Trebuchet MS / Lucida Sans</a></li><li style="font-family:Verdana,Geneva,Tahoma,sans-serif!important"><a href="#">Verdana / Geneva</a></li></ul></dd></dl></div></div><div class="elementWrap clearfix heading1"><div class="titleWrap">H1</div><div class="left">Text color:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_h1" value="" /><input type="hidden" class="elements" value="${h1}" /><input autocomplete="off" class="color colorText" cssselector="color" elements="#contentPrimary h1" value="" /></div></div><div class="left"><div class="fontsz" cssselector="color" elements="h1"><input class="fontszr" disabled="disabled" type="text" value="" /><p class="fszrpx">px</p><button class="fontszup" value="fontszup">+</button><button class="fontszdown" value="fontszdown">+</button></div></div><div class="right"><div class="buttonWrap" elements="h1"><button class="bold" value="bold">B</button><button class="italic" value="italic">I</button><button class="underline" value="underline">U</button><button class="uppercase" value="uppercase">TT</button></div></div></div><div class="elementWrap clearfix heading2"><div class="titleWrap">H2</div><div class="left">Text color:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_h2" value="" /><input type="hidden" class="elements" value="${h2}" /><input autocomplete="off" class="color colorText" cssselector="color" elements="#contentPrimary h2" value="" /></div></div><div class="left"><div class="fontsz" cssselector="color" elements="h2"><input class="fontszr" disabled="disabled" type="text" value="" /><p class="fszrpx">px</p><button class="fontszup" value="fontszup">+</button><button class="fontszdown" value="fontszdown">+</button></div></div><div class="right"><div class="buttonWrap" elements="h2"><button class="bold" value="bold">B</button><button class="italic" value="italic">I</button><button class="underline" value="underline">U</button><button class="uppercase" value="uppercase">TT</button></div></div></div><div class="elementWrap clearfix heading3"><div class="titleWrap">H3</div><div class="left">Text color:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_h3" value="" /><input type="hidden" class="elements" value="${h3}" /><input autocomplete="off" class="color colorText" cssselector="color" elements="#contentPrimary h3" value="" /></div></div><div class="left"><div class="fontsz" cssselector="color" elements="h3"><input class="fontszr" disabled="disabled" type="text" value="" /><p class="fszrpx">px</p><button class="fontszup" value="fontszup">+</button><button class="fontszdown" value="fontszdown">+</button></div></div><div class="right"><div class="buttonWrap" elements="h3"><button class="bold" value="bold">B</button><button class="italic" value="italic">I</button><button class="underline" value="underline">U</button><button class="uppercase" value="uppercase">TT</button></div></div></div><div class="elementWrap clearfix heading4"><div class="titleWrap">H4</div><div class="left">Text color:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_h4" value="" /><input type="hidden" class="elements" value="${h4}" /><input autocomplete="off" class="color colorText" cssselector="color" elements="#contentPrimary h4" value="" /></div></div><div class="left"><div class="fontsz" cssselector="color" elements="h4"><input class="fontszr" disabled="disabled" type="text" value="" /><p class="fszrpx">px</p><button class="fontszup" value="fontszup">+</button><button class="fontszdown" value="fontszdown">+</button></div></div><div class="right"><div class="buttonWrap" elements="h4"><button class="bold" value="bold">B</button><button class="italic" value="italic">I</button><button class="underline" value="underline">U</button><button class="uppercase" value="uppercase">TT</button></div></div></div><div class="elementWrap clearfix text"><div class="titleWrap">Text</div><div class="left">Text color:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_text" value="" /><input type="hidden" class="elements" value="${text}" /><input autocomplete="off" class="color colorText" cssselector="color" elements="#contentPrimary p, #contentSecondary p, #contentPrimary li, #contentPrimary td" value="" /></div></div><div class="left"><div class="fontsz" cssselector="color" elements="#contentPrimary p, #contentSecondary p, #contentPrimary li, #contentPrimary td"><input class="fontszr" disabled="disabled" type="text" value="" /><p class="fszrpx">px</p><button class="fontszup" value="fontszup">+</button><button class="fontszdown" value="fontszdown">+</button></div></div><div class="right"><div class="buttonWrap" elements="#contentPrimary p, #contentSecondary p, #contentPrimary li, #contentPrimary td"><button class="bold" value="bold">B</button><button class="italic" value="italic">I</button><button class="underline" value="underline">U</button><button class="uppercase" value="uppercase">TT</button></div></div><div class="fontWrap"><dl class="fontList" elements="#contentPrimary p, #contentSecondary p, #contentPrimary li, #contentPrimary td"><dt><a href="#">Select a font</a></dt><dd><ul><li style="font-family:Arial,Helvetica,sans-serif!important"><a href="#">Arial / Helvetica</a></li><li style="font-family:Baskerville,Palatino Linotype,Palatino,Times New Roman,serif!important"><a href="#">Baskerville / Palatino Linotype</a></li><li style="font-family:Century Gothic,Apple Gothic,URW Gothic L,sans-serif!important"><a href="#">Century Gothic / Apple Gothic</a></li><li style="font-family:Courier New,Courier,Andale Mono,monospace!important"><a href="#">Courier New / Courier</a></li><li style="font-family:Georgia,Times New Roman,Times,serif!important"><a href="#">Georgia / Times New Roman</a></li><li style="font-family:Gill Sans,Gill Sans MT,Helvetica,Arial,sans-serif!important"><a href="#">Gill Sans / Gill Sans MT</a></li><li style="font-family:Impact,Haettenschweiler,Arial Narrow Bold,Charcoal,sans-serif!important"><a href="#">Impact / Haettenschweiler</a></li><li style="font-family:Lucida Sans,Lucida Grande,Lucida Sans Unicode,Trebuchet MS,sans-serif!important"><a href="#">Lucida sans / Lucida Grande</a></li><li style="font-family:Palatino,Palatino Linotype,URW Palladio L,Georgia,Times New Roman,Times,serif!important"><a href="#">Palatino / Palatino Linotype</a></li><li style="font-family:Tahoma,Geneva,Verdana,sans-serif!important"><a href="#">Tahoma / Geneva</a></li><li style="font-family:Times New Roman,Times,serif!important"><a href="#">Times New Roman / Times</a></li><li style="font-family:Trebuchet MS,Lucida Sans,Lucida Grande,Lucida Sans Unicode,sans-serif!important"><a href="#">Trebuchet MS / Lucida Sans</a></li><li style="font-family:Verdana,Geneva,Tahoma,sans-serif!important"><a href="#">Verdana / Geneva</a></li></ul></dd></dl></div></div><div class="elementWrap clearfix links"><div class="titleWrap">Text Links</div><div class="left"><div class="inputWrap"><input type="hidden" id="storage_textLinks" value="" /><input type="hidden" class="elements" value="${link}" /><input autocomplete="off" class="color colorText" cssselector="color" elements="#contentPrimary a" value="" /></div></div><div class="right"><div class="buttonWrap" elements="#contentPrimary a"><button class="bold" value="bold">B</button><button class="italic" value="italic">I</button><button class="underline" value="underline">U</button><button class="uppercase" value="uppercase">TT</button></div></div></div><div class="elementWrap clearfix linksHover"><div id="textLinkHover" element="#contentPrimary a.hover"><div class="titleWrap">Text Link Hover</div><div class="left"><div class="inputWrap"><input type="hidden" id="storage_textLinksHover" value="" /><input type="hidden" class="elements" value="${linkHover}" /><input autocomplete="off" class="color colorText" cssselector="color" elements="#contentPrimary a.hover" value="asdf" /></div></div><div class="right"><div class="buttonWrap" elements="#contentPrimary a.hover"><button class="bold" value="bold">B</button><button class="italic" value="italic">I</button><button class="underline" value="underline">U</button><button class="uppercase" value="uppercase">TT</button></div></div></div></div></div><div id="tabs-2"><div class="elementWrap clearfix utilityMenu"><div class="titleWrap">Utility Menu</div><div class="left">Link color:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_utilityNavLink" value="" /><input type="hidden" class="elements" value="${utilityNavLink}" /><input elements="#headerUtility li a" cssselector="color" class="color colorText" autocomplete="off" value="" /></div></div><div class="left"><div elements="#headerUtility li a" cssselector="color" class="fontsz"><input disabled="disabled" class="fontszr" type="text" value="" /><p class="fszrpx">px</p><button value="fontszup" class="fontszup">+</button><button value="fontszdown" class="fontszdown">+</button></div></div><div class="right"><div elements="#headerUtility li a" class="buttonWrap"><button value="bold" class="bold">B</button><button value="italic" class="italic">I</button><button value="underline" class="underline">U</button><button value="uppercase" class="uppercase">TT</button></div></div><div class="fontWrap"><dl class="fontList" elements="#headerUtility a"><dt><a href="#">Select a font</a></dt><dd><ul><li style="font-family:Arial,Helvetica,sans-serif!important"><a href="#">Arial / Helvetica</a></li><li style="font-family:Baskerville,Palatino Linotype,Palatino,Times New Roman,serif!important"><a href="#">Baskerville / Palatino Linotype</a></li><li style="font-family:Century Gothic,Apple Gothic,URW Gothic L,sans-serif!important"><a href="#">Century Gothic / Apple Gothic</a></li><li style="font-family:Courier New,Courier,Andale Mono,monospace!important"><a href="#">Courier New / Courier</a></li><li style="font-family:Georgia,Times New Roman,Times,serif!important"><a href="#">Georgia / Times New Roman</a></li><li style="font-family:Gill Sans,Gill Sans MT,Helvetica,Arial,sans-serif!important"><a href="#">Gill Sans / Gill Sans MT</a></li><li style="font-family:Impact,Haettenschweiler,Arial Narrow Bold,Charcoal,sans-serif!important"><a href="#">Impact / Haettenschweiler</a></li><li style="font-family:Lucida Sans,Lucida Grande,Lucida Sans Unicode,Trebuchet MS,sans-serif!important"><a href="#">Lucida sans / Lucida Grande</a></li><li style="font-family:Palatino,Palatino Linotype,URW Palladio L,Georgia,Times New Roman,Times,serif!important"><a href="#">Palatino / Palatino Linotype</a></li><li style="font-family:Tahoma,Geneva,Verdana,sans-serif!important"><a href="#">Tahoma / Geneva</a></li><li style="font-family:Times New Roman,Times,serif!important"><a href="#">Times New Roman / Times</a></li><li style="font-family:Trebuchet MS,Lucida Sans,Lucida Grande,Lucida Sans Unicode,sans-serif!important"><a href="#">Trebuchet MS / Lucida Sans</a></li><li style="font-family:Verdana,Geneva,Tahoma,sans-serif!important"><a href="#">Verdana / Geneva</a></li></ul></dd></dl></div></div><div class="elementWrap clearfix mMenu"><div class="titleWrap">Main Menu</div><div class="left">Link color:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_mainNavLink" value="" /><input type="hidden" class="elements" value="${mainNavLink}" /><input elements="#wrapNav li a" cssselector="color" class="color colorText" autocomplete="off" value="" /></div></div><div class="left"><div elements="#wrapNav li a" cssselector="color" class="fontsz"><input disabled="disabled" class="fontszr" type="text" value="" /><p class="fszrpx">px</p><button value="fontszup" class="fontszup">+</button><button value="fontszdown" class="fontszdown">+</button></div></div><div class="right"><div elements="#wrapNav li a" class="buttonWrap"><button value="bold" class="bold">B</button><button value="italic" class="italic">I</button><button value="underline" class="underline">U</button><button value="uppercase" class="uppercase">TT</button></div></div><div class="fontWrap"><dl class="fontList" elements="#wrapNav a"><dt><a href="#">Select a font</a></dt><dd><ul><li style="font-family:Arial,Helvetica,sans-serif!important"><a href="#">Arial / Helvetica</a></li><li style="font-family:Baskerville,Palatino Linotype,Palatino,Times New Roman,serif!important"><a href="#">Baskerville / Palatino Linotype</a></li><li style="font-family:Century Gothic,Apple Gothic,URW Gothic L,sans-serif!important"><a href="#">Century Gothic / Apple Gothic</a></li><li style="font-family:Courier New,Courier,Andale Mono,monospace!important"><a href="#">Courier New / Courier</a></li><li style="font-family:Georgia,Times New Roman,Times,serif!important"><a href="#">Georgia / Times New Roman</a></li><li style="font-family:Gill Sans,Gill Sans MT,Helvetica,Arial,sans-serif!important"><a href="#">Gill Sans / Gill Sans MT</a></li><li style="font-family:Impact,Haettenschweiler,Arial Narrow Bold,Charcoal,sans-serif!important"><a href="#">Impact / Haettenschweiler</a></li><li style="font-family:Lucida Sans,Lucida Grande,Lucida Sans Unicode,Trebuchet MS,sans-serif!important"><a href="#">Lucida sans / Lucida Grande</a></li><li style="font-family:Palatino,Palatino Linotype,URW Palladio L,Georgia,Times New Roman,Times,serif!important"><a href="#">Palatino / Palatino Linotype</a></li><li style="font-family:Tahoma,Geneva,Verdana,sans-serif!important"><a href="#">Tahoma / Geneva</a></li><li style="font-family:Times New Roman,Times,serif!important"><a href="#">Times New Roman / Times</a></li><li style="font-family:Trebuchet MS,Lucida Sans,Lucida Grande,Lucida Sans Unicode,sans-serif!important"><a href="#">Trebuchet MS / Lucida Sans</a></li><li style="font-family:Verdana,Geneva,Tahoma,sans-serif!important"><a href="#">Verdana / Geneva</a></li></ul></dd></dl></div></div><div class="elementWrap clearfix"><div class="left">Menu Gradient:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_mainNavGradient" value="" /><input type="hidden" class="elements" value="${mainNavGradient}" /><button elements="#wrapNav .gradient" class="hideIt">X</button></div></div></div><div class="elementWrap clearfix"><div class="left">Menu Background:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_mainNavBG" value="" /><input type="hidden" class="elements" value="${mainNavBG}" /><input elements="#wrapNav" cssselector="background-color" class="color colorBackground" autocomplete="off" value="" /></div></div></div><div class="elementWrap clearfix"><div class="left">Menu Dividers:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_mainNavBorder" value="" /><input type="hidden" class="elements" value="${mainNavBorder}" /><input elements="#wrapNav li" cssselector="border-right-color" class="color colorBorder" autocomplete="off" value="" /></div></div></div><div class="elementWrap clearfix"><div class="subTitleWrap">Hover/Selected Item</div><div class="left"><div class="inputWrap"><input type="hidden" id="storage_mainNavLinkHover" value="" /><input type="hidden" class="elements" value="${mainNavLinkHover}" /><input elements="#wrapNav li.selected a" cssselector="color" class="color colorText" autocomplete="off" value="" /></div></div><div class="right"><div elements="#wrapNav li.selected a" class="buttonWrap"><button value="bold" class="bold">B</button><button value="italic" class="italic">I</button><button value="underline" class="underline">U</button><button value="uppercase" class="uppercase">TT</button></div></div><div class="left">Link Background:</div><div class="right"><div class="inputWrap"><input elements="#wrapNav li.selected" cssselector="background-color" class="color colorBackground" autocomplete="off" value="" /></div></div></div><div class="elementWrap clearfix sideMenu"><div class="titleWrap">Side Menu</div><div class="left">Link color:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_sideNavLink" value="" /><input type="hidden" class="elements" value="${sideNavLink}" /><input elements="#contentSecondary li a" cssselector="color" class="color colorText" autocomplete="off" value="" /></div></div><div class="left"><div elements="#contentSecondary li a" cssselector="color" class="fontsz"><input disabled="disabled" class="fontszr" type="text" value="" /><p class="fszrpx">px</p><button value="fontszup" class="fontszup">+</button><button value="fontszdown" class="fontszdown">+</button></div></div><div class="right"><div elements="#contentSecondary li a" class="buttonWrap"><button value="bold" class="bold">B</button><button value="italic" class="italic">I</button><button value="underline" class="underline">U</button><button value="uppercase" class="uppercase">TT</button></div></div><div class="fontWrap"><dl class="fontList" elements="#contentSecondary .internalMenu a"><dt><a href="#">Select a font</a></dt><dd><ul><li style="font-family:Arial,Helvetica,sans-serif!important"><a href="#">Arial / Helvetica</a></li><li style="font-family:Baskerville,Palatino Linotype,Palatino,Times New Roman,serif!important"><a href="#">Baskerville / Palatino Linotype</a></li><li style="font-family:Century Gothic,Apple Gothic,URW Gothic L,sans-serif!important"><a href="#">Century Gothic / Apple Gothic</a></li><li style="font-family:Courier New,Courier,Andale Mono,monospace!important"><a href="#">Courier New / Courier</a></li><li style="font-family:Georgia,Times New Roman,Times,serif!important"><a href="#">Georgia / Times New Roman</a></li><li style="font-family:Gill Sans,Gill Sans MT,Helvetica,Arial,sans-serif!important"><a href="#">Gill Sans / Gill Sans MT</a></li><li style="font-family:Impact,Haettenschweiler,Arial Narrow Bold,Charcoal,sans-serif!important"><a href="#">Impact / Haettenschweiler</a></li><li style="font-family:Lucida Sans,Lucida Grande,Lucida Sans Unicode,Trebuchet MS,sans-serif!important"><a href="#">Lucida sans / Lucida Grande</a></li><li style="font-family:Palatino,Palatino Linotype,URW Palladio L,Georgia,Times New Roman,Times,serif!important"><a href="#">Palatino / Palatino Linotype</a></li><li style="font-family:Tahoma,Geneva,Verdana,sans-serif!important"><a href="#">Tahoma / Geneva</a></li><li style="font-family:Times New Roman,Times,serif!important"><a href="#">Times New Roman / Times</a></li><li style="font-family:Trebuchet MS,Lucida Sans,Lucida Grande,Lucida Sans Unicode,sans-serif!important"><a href="#">Trebuchet MS / Lucida Sans</a></li><li style="font-family:Verdana,Geneva,Tahoma,sans-serif!important"><a href="#">Verdana / Geneva</a></li></ul></dd></dl></div></div><div class="elementWrap clearfix"><div class="subTitleWrap">Hover/Selected Item</div><div class="left">Link color:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_sideNavLinkHover" value="" /><input type="hidden" class="elements" value="${sideNavLinkHover}" /><input elements="#contentSecondary li.selected a" cssselector="color" class="color colorText" autocomplete="off" value="" /></div></div><div class="left">Link Background:</div><div class="right"><input elements="#contentSecondary li.hover a" cssselector="background-color" class="color colorBackground" autocomplete="off" value="" /></div><div class="left">Link Style:</div><div class="right"><div elements="#contentSecondary li.selected a" class="buttonWrap"><button value="bold" class="bold">B</button><button value="italic" class="italic">I</button><button value="underline" class="underline">U</button><button value="uppercase" class="uppercase">TT</button></div></div></div></div><div id="tabs-3"><div id="theme1tools"><div class="elementWrap clearfix header"><div class="titleWrap">Header</div><div class="left">Utility Background:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_header1" value="" /><input type="hidden" class="elements" value="${header1}" /><input elements="#wrapHeader" cssselector="background-color" class="color colorBackground" autocomplete="off"></div></div></div><div class="elementWrap clearfix footer"><div class="titleWrap">Footer</div><div style="width:110px;text-align:right" class="left">Background:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_footer1" value="" /><input type="hidden" class="elements" value="${footer1}" /><input elements="#wrapFooter, #BodyId" cssselector="background-color" class="color colorBackground" autocomplete="off" /></div></div><div style="width:110px;text-align:right" class="left">Border:</div><div class="right"><div class="inputWrap"><input elements="#wrapFooter" cssselector="border-top-color" class="color colorBorder" autocomplete="off"></div></div><div style="width:110px;text-align:right" class="left">Text color:</div><div class="right"><div class="inputWrap"><input elements="#wrapFooter" cssselector="color" class="color colorText" autocomplete="off"></div></div></div></div><div id="theme2tools"><div class="elementWrap clearfix header"><div class="titleWrap">Header</div><div class="left">Background:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_header2" value="" /><input type="hidden" class="elements" value="${header2}" /><input autocomplete="off" class="color colorBackground" cssselector="background-color" elements="#wrapHeader" /></div></div></div><div class="elementWrap clearfix"><div class="titleWrap">Donate Button</div><div class="left">Background:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_donateButton" value="" /><input type="hidden" class="elements" value="${donateButton}" /><input autocomplete="off" class="color colorBackgroundOnly" cssselector="background-color" elements="#donateButton"></div></div></div><div class="elementWrap clearfix"><div class="subTitleWrap">Button Text</div><div class="left"><input type="hidden" id="storage_donateButtonText" value="" /><input type="hidden" class="elements" value="${donateButtonText}" /><div class="fontsz" cssselector="color" elements="#donateButton a"><input class="fontszr" disabled="disabled" type="text"><p class="fszrpx">px</p><button class="fontszup" value="fontszup">+</button><button class="fontszdown" value="fontszdown">+</button></div></div><div class="right"><div class="buttonWrap" elements="#donateButton a"><button class="bold" value="bold">B</button><button class="italic" value="italic">I</button><button class="underline" value="underline">U</button><button class="uppercase" value="uppercase">TT</button></div></div></div><div class="elementWrap clearfix"><div class="subTitleWrap">Button Hover State</div><div class="left">Background:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_donateButtonHover" value="" /><input type="hidden" class="elements" value="${donateButtonHover}" /><input autocomplete="off" class="color colorBackgroundOnly" cssselector="background-color" elements="#donateButton a.hover"></div></div><div class="left">Font Color:</div><div class="right"><div class="inputWrap"><input autocomplete="off" class="color colorText" cssselector="color" elements="#donateButton a.hover"></div></div></div><div class="elementWrap clearfix footer"><div class="titleWrap">Canvas</div><div style="width:110px;text-align:right" class="left">Background:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_canvas2" value="" /><input type="hidden" class="elements" value="${canvas2}" /><input elements="#internal" cssselector="background-color" class="color colorBackground" autocomplete="off"></div></div></div><div class="elementWrap clearfix footer"><div class="titleWrap">Footer</div><div class="left">Background:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_footer2" value="" /><input type="hidden" class="elements" value="${footer2}" /><input elements="#wrapFooter" cssselector="background-color" class="color colorBackground" autocomplete="off" /></div></div><div class="left">Text color:</div><div class="right"><div class="inputWrap"><input elements="#wrapFooter" cssselector="color" class="color colorText" autocomplete="off"></div></div></div></div><div id="theme3tools"><div class="elementWrap clearfix header"><div class="titleWrap">Header</div><div class="left">Background:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_header3" value="" /><input type="hidden" class="elements" value="${header3}" /><input elements="#wrapHeader" cssselector="background-color" class="color colorBackground" autocomplete="off"></div></div></div><div class="elementWrap clearfix"><div class="titleWrap">Welcome/Title bar</div><div class="left">Background:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_titleBar" value="" /><input type="hidden" class="elements" value="${titleBar}" /><input elements="#headerBanner" cssselector="background-color" class="color colorBackground" autocomplete="off"></div></div></div><div class="elementWrap clearfix"><div class="left">Text Color:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_titleBarText" value="" /><input type="hidden" class="elements" value="${titleBarText}" /><input elements="#headerBanner .title" cssselector="color" class="color colorText" autocomplete="off"></div></div><div class="left"><div class="fontsz" cssselector="color" elements="#headerBanner .title"><input class="fontszr" disabled="disabled" type="text"><p class="fszrpx">px</p><button class="fontszup" value="fontszup">+</button><button class="fontszdown" value="fontszdown">+</button></div></div><div class="right"><div class="buttonWrap" elements="#headerBanner .title"><button class="bold" value="bold">B</button><button class="italic" value="italic">I</button><button class="underline" value="underline">U</button><button class="uppercase" value="uppercase">TT</button></div></div><div class="fontWrap"><dl class="fontList" elements="#headerBanner .title"><dt><a href="#">Select a font</a></dt><dd><ul><li style="font-family:Arial,Helvetica,sans-serif!important"> <a href="#">Arial / Helvetica</a> </li><li style="font-family:Baskerville,Palatino Linotype,Palatino,Times New Roman,serif!important"> <a href="#">Baskerville / Palatino Linotype</a> </li><li style="font-family:Century Gothic,Apple Gothic,URW Gothic L,sans-serif!important"> <a href="#">Century Gothic / Apple Gothic</a> </li><li style="font-family:Courier New,Courier,Andale Mono,monospace!important"> <a href="#">Courier New / Courier</a> </li><li style="font-family:Georgia,Times New Roman,Times,serif!important"> <a href="#">Georgia / Times New Roman</a> </li><li style="font-family:Gill Sans,Gill Sans MT,Helvetica,Arial,sans-serif!important"> <a href="#">Gill Sans / Gill Sans MT</a> </li><li style="font-family:Impact,Haettenschweiler,Arial Narrow Bold,Charcoal,sans-serif!important"> <a href="#">Impact / Haettenschweiler</a> </li><li style="font-family:Lucida Sans,Lucida Grande,Lucida Sans Unicode,Trebuchet MS,sans-serif!important"> <a href="#">Lucida sans / Lucida Grande</a> </li><li style="font-family:Palatino,Palatino Linotype,URW Palladio L,Georgia,Times New Roman,Times,serif!important"> <a href="#">Palatino / Palatino Linotype</a> </li><li style="font-family:Tahoma,Geneva,Verdana,sans-serif!important"> <a href="#">Tahoma / Geneva</a> </li><li style="font-family:Times New Roman,Times,serif!important"> <a href="#">Times New Roman / Times</a> </li><li style="font-family:Trebuchet MS,Lucida Sans,Lucida Grande,Lucida Sans Unicode,sans-serif!important"> <a href="#">Trebuchet MS / Lucida Sans</a> </li><li style="font-family:Verdana,Geneva,Tahoma,sans-serif!important"> <a href="#">Verdana / Geneva</a> </li></ul></dd></dl></div></div><div class="elementWrap clearfix footer"><div class="titleWrap">Canvas</div><div class="left" style="width:110px;text-align:right">Background:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_canvas3" value="" /><input type="hidden" class="elements" value="${canvas3}" /><input autocomplete="off" class="color colorBackground" cssselector="background-color" elements="#BodyId"></div></div></div><div class="elementWrap clearfix footer"><div class="titleWrap">Footer</div><div class="left">Background:</div><div class="right"><div class="inputWrap"><input type="hidden" id="storage_footer3" value="" /><input type="hidden" class="elements" value="${footer3}" /><input elements="#wrapFooter" cssselector="background-color" class="color colorBackground" autocomplete="off" /></div></div><div class="left">Text color:</div><div class="right"><div class="inputWrap"><input elements="#wrapFooter" cssselector="color" class="color colorText" autocomplete="off"></div></div></div></div></div><div id="tabs-4"><div class="elementWrap clearfix"><div class="titleWrap">Save Changes</div><div class="formWrap"><div class="divField clearfix"><label for="txtUserName">Username:</label><input id="txtUserName" value="" /></div><div class="divField clearfix"><label for="txtPwd">Password:</label><input id="txtPwd" type="password" value="" /></div></div><p><a href="#" id="saveChanges">Save Changes</a><a href="#" id="setDefault">Reset to Default</a></p><p>(!)IMPORTANT: After saving your style changes, remove the Theme Caddy Part from the Style Guide in order to prevent any future overrides of the stylesheet.</p></div></div></div></div></div></div>',
		
		email: '<div id="EmailEditor"><div id="sideBar"><div id="tabs3"><ul><li><a href="#tabs-1">Design</a></li><li><a href="#tabs-2">Client Info</a></li></ul><div id="tabs-1"><div class="elementWrap clearfix primary"><div class="titleWrap">Heading</div><div class="left">Font-size:</div><div class="right"><div class="fontsz" cssselector="color" elements=".heading"><input class="fontszr" disabled="disabled" type="text" /><p class="fszrpx">px</p><button class="fontszup" value="fontszup">+</button> <button class="fontszdown" value="fontszdown">+</button></div></div><div class="left">Font-color:</div><div class="right"><div class="inputWrap"><input class="color" cssselector="color" elements=".heading" /></div></div><div class="left">Font-style:</div><div class="right"><div class="buttonWrap" elements=".heading"><button class="bold" value="bold">B</button><button class="italic" value="italic">I</button><button class="underline" value="underline">U</button><button class="uppercase" value="uppercase">TT</button></div></div><div class="fontWrap"><dl class="fontList" elements=".heading"><dt><a href="#">Select a font</a></dt><dd><ul><li style="font-family:Andale Mono,Arial Black,Times New Roman,sans-serif!important"><a href="#">Andale Mono / Arial Black</a></li><li style="font-family:Arial Black,Arial Bold,Gadget,sans-serif!important"><a href="#">Arial Black / Arial Bold</a></li><li style="font-family:Arial Narrow,Arial,sans-serif!important"><a href="#">Arial Narrow / Arial</a></li><li style="font-family:Arial,Helvetica,sans-serif!important"><a href="#">Arial / Helvetica</a></li><li style="font-family:Baskerville,Palatino Linotype,Palatino,Times New Roman,serif!important"><a href="#">Baskerville / Palatino Linotype</a></li><li style="font-family:Century Gothic,Apple Gothic,URW Gothic L,sans-serif!important"><a href="#">Century Gothic / Apple Gothic</a></li><li style="font-family:Comic Sans MS,cursive!important"><a href="#">Comic Sans MS / cursive</a></li><li style="font-family:Courier New,Courier,Andale Mono,monospace!important"><a href="#">Courier New / Courier</a></li><li style="font-family:Georgia,Times New Roman,Times,serif!important"><a href="#">Georgia / Times New Roman</a></li><li style="font-family:Gill Sans,Gill Sans MT,Helvetica,Arial,sans-serif!important"><a href="#">Gill Sans / Gill Sans MT</a></li><li style="font-family:Impact,Haettenschweiler,Arial Narrow Bold,Charcoal,sans-serif!important"><a href="#">Impact / Haettenschweiler</a></li><li style="font-family:Lucida Sans,Lucida Grande,Lucida Sans Unicode,Trebuchet MS,sans-serif!important"><a href="#">Lucida sans / Lucida Grande</a></li><li style="font-family:Palatino,Palatino Linotype,URW Palladio L,Georgia,Times New Roman,Times,serif!important"><a href="#">Palatino / Palatino Linotype</a></li><li style="font-family:Tahoma,Geneva,Verdana,sans-serif!important"><a href="#">Tahoma / Geneva</a></li><li style="font-family:Times New Roman,Times,serif!important"><a href="#">Times New Roman / Times</a></li><li style="font-family:Trebuchet MS,Lucida Sans,Lucida Grande,Lucida Sans Unicode,sans-serif!important"><a href="#">Trebuchet MS / Lucida Sans</a></li><li style="font-family:Verdana,Geneva,Tahoma,sans-serif!important"><a href="#">Verdana / Geneva</a></li></ul></dd></dl></div></div><div class="elementWrap clearfix text"><div class="titleWrap">Text</div><div class="left">Font-size:</div><div class="right"><div class="fontsz" cssselector="color" elements=".body"><input class="fontszr" disabled="disabled" type="text" /><p class="fszrpx">px</p><button class="fontszup" value="fontszup">+</button> <button class="fontszdown" value="fontszdown">+</button></div></div><div class="left">Font-color:</div><div class="right"><div class="inputWrap"><input class="color" cssselector="color" elements=".body" /></div></div><div class="left">Font-style:</div><div class="right"><div class="buttonWrap" elements=".body"><button class="bold" value="bold">B</button><button class="italic" value="italic">I</button><button class="underline" value="underline">U</button><button class="uppercase" value="uppercase">TT</button></div></div><div class="fontWrap"><dl class="fontList" elements=".body"><dt><a href="#">Select a font</a></dt><dd><ul><li style="font-family:Andale Mono,Arial Black,Times New Roman,sans-serif!important"><a href="#">Andale Mono / Arial Black</a></li><li style="font-family:Arial Black,Arial Bold,Gadget,sans-serif!important"><a href="#">Arial Black / Arial Bold</a></li><li style="font-family:Arial Narrow,Arial,sans-serif!important"><a href="#">Arial Narrow / Arial</a></li><li style="font-family:Arial,Helvetica,sans-serif!important"><a href="#">Arial / Helvetica</a></li><li style="font-family:Baskerville,Palatino Linotype,Palatino,Times New Roman,serif!important"><a href="#">Baskerville / Palatino Linotype</a></li><li style="font-family:Century Gothic,Apple Gothic,URW Gothic L,sans-serif!important"><a href="#">Century Gothic / Apple Gothic</a></li><li style="font-family:Comic Sans MS,cursive!important"><a href="#">Comic Sans MS / cursive</a></li><li style="font-family:Courier New,Courier,Andale Mono,monospace!important"><a href="#">Courier New / Courier</a></li><li style="font-family:Georgia,Times New Roman,Times,serif!important"><a href="#">Georgia / Times New Roman</a></li><li style="font-family:Gill Sans,Gill Sans MT,Helvetica,Arial,sans-serif!important"><a href="#">Gill Sans / Gill Sans MT</a></li><li style="font-family:Impact,Haettenschweiler,Arial Narrow Bold,Charcoal,sans-serif!important"><a href="#">Impact / Haettenschweiler</a></li><li style="font-family:Lucida Sans,Lucida Grande,Lucida Sans Unicode,Trebuchet MS,sans-serif!important"><a href="#">Lucida sans / Lucida Grande</a></li><li style="font-family:Palatino,Palatino Linotype,URW Palladio L,Georgia,Times New Roman,Times,serif!important"><a href="#">Palatino / Palatino Linotype</a></li><li style="font-family:Tahoma,Geneva,Verdana,sans-serif!important"><a href="#">Tahoma / Geneva</a></li><li style="font-family:Times New Roman,Times,serif!important"><a href="#">Times New Roman / Times</a></li><li style="font-family:Trebuchet MS,Lucida Sans,Lucida Grande,Lucida Sans Unicode,sans-serif!important"><a href="#">Trebuchet MS / Lucida Sans</a></li><li style="font-family:Verdana,Geneva,Tahoma,sans-serif!important"><a href="#">Verdana / Geneva</a></li></ul></dd></dl></div></div><div class="elementWrap clearfix text"><div class="titleWrap">Footer</div><div class="left">Font-size:</div><div class="right"><div class="fontsz" cssselector="color" elements=".footer"><input class="fontszr" disabled="disabled" type="text" /><p class="fszrpx">px</p><button class="fontszup" value="fontszup">+</button> <button class="fontszdown" value="fontszdown">+</button></div></div><div class="left">Font-color:</div><div class="right"><div class="inputWrap"><input class="color" cssselector="color" elements=".footer" /></div></div><div class="left">Link-color:</div><div class="right"><div class="inputWrap"><input class="color" cssselector="color" elements=".footer a" /></div></div><div class="left">Background:</div><div class="right"><input class="color" cssselector="background-color" elements=".footer" /></div><div class="fontWrap"><dl class="fontList" elements=".footer"><dt><a href="#">Select a font</a></dt><dd><ul><li style="font-family:Andale Mono,Arial Black,Times New Roman,sans-serif!important"><a href="#">Andale Mono / Arial Black</a></li><li style="font-family:Arial Black,Arial Bold,Gadget,sans-serif!important"><a href="#">Arial Black / Arial Bold</a></li><li style="font-family:Arial Narrow,Arial,sans-serif!important"><a href="#">Arial Narrow / Arial</a></li><li style="font-family:Arial,Helvetica,sans-serif!important"><a href="#">Arial / Helvetica</a></li><li style="font-family:Baskerville,Palatino Linotype,Palatino,Times New Roman,serif!important"><a href="#">Baskerville / Palatino Linotype</a></li><li style="font-family:Century Gothic,Apple Gothic,URW Gothic L,sans-serif!important"><a href="#">Century Gothic / Apple Gothic</a></li><li style="font-family:Comic Sans MS,cursive!important"><a href="#">Comic Sans MS / cursive</a></li><li style="font-family:Courier New,Courier,Andale Mono,monospace!important"><a href="#">Courier New / Courier</a></li><li style="font-family:Georgia,Times New Roman,Times,serif!important"><a href="#">Georgia / Times New Roman</a></li><li style="font-family:Gill Sans,Gill Sans MT,Helvetica,Arial,sans-serif!important"><a href="#">Gill Sans / Gill Sans MT</a></li><li style="font-family:Impact,Haettenschweiler,Arial Narrow Bold,Charcoal,sans-serif!important"><a href="#">Impact / Haettenschweiler</a></li><li style="font-family:Lucida Sans,Lucida Grande,Lucida Sans Unicode,Trebuchet MS,sans-serif!important"><a href="#">Lucida sans / Lucida Grande</a></li><li style="font-family:Palatino,Palatino Linotype,URW Palladio L,Georgia,Times New Roman,Times,serif!important"><a href="#">Palatino / Palatino Linotype</a></li><li style="font-family:Tahoma,Geneva,Verdana,sans-serif!important"><a href="#">Tahoma / Geneva</a></li><li style="font-family:Times New Roman,Times,serif!important"><a href="#">Times New Roman / Times</a></li><li style="font-family:Trebuchet MS,Lucida Sans,Lucida Grande,Lucida Sans Unicode,sans-serif!important"><a href="#">Trebuchet MS / Lucida Sans</a></li><li style="font-family:Verdana,Geneva,Tahoma,sans-serif!important"><a href="#">Verdana / Geneva</a></li></ul></dd></dl></div></div></div><div id="tabs-2"><div class="elementWrap clearfix primary"><div class="titleWrap">Client Info</div><div class="textWrap"><div class="caption">Organization Name:</div><div class="control"><input name="text" class="text" type="text" size="25" elements=".siteName" /><input type="checkbox" checked="checked" class="includeField" id="includeSiteName" /><label for="includeSiteName">Include?</label></div></div><div class="textWrap"><div class="caption">Address:</div><div class="control"><input name="text" class="text" type="text" size="25" elements=".siteAddr" /><input type="checkbox" checked="checked" class="includeField" id="includeSiteAddr" /><label for="includeSiteAddr">Include?</label></div></div><div class="textWrap"><div class="caption">Phone:</div><div class="control"><input name="text" class="text" type="text" size="25" elements=".sitePhone" /><input type="checkbox" checked="checked" class="includeField" id="includeSitePhone" /><label for="includeSitePhone">Include?</label></div></div><div class="textWrap"><div class="caption">Fax:</div><div class="control"><input name="text" class="text" type="text" size="25" elements=".siteFax" /><input type="checkbox" checked="checked" class="includeField" id="includeSiteFax" /><label for="includeSiteFax">Include?</label></div></div><div class="textWrap"><div class="caption">Email:</div><div class="control"><input name="text" class="text" type="text" size="25" elements=".siteEmail" /><input type="checkbox" checked="checked" class="includeField" id="includeSiteEmail" /><label for="includeSiteEmail">Include?</label></div></div></div></div></div></div><h1>Email Design Preview:</h1><ul class="emailContentPreviewMenu"><li class="menuTitle">Show:</li><li><a id="showAppealTemplate" href="#">Appeal Template</a></li><li><a id="showNewsletterTemplate" href="#">Newsletter Template</a></li><li class="selected"><a id="showOneColumnTemplate" href="#">One-Column Template</a></li></ul><div id="EmailContentPreview"></div><h1>Email HTML</h1><p>Click on the tabs to the left to load the email\'s HTML. You can copy the HTML from the pane on the right by pressing "Ctrl+C" (Command+C, Mac).</p><div id="EmailContentViewer" class="clearfix"><ul class="emailContentMenu"><li><a id="showAlreadyLinkedUser" href="#">Already Linked User Template</a></li><li><a id="showAppeal" href="#">Appeal Template</a></li><li><a id="showOneColumn" href="#">General Template</a></li><li><a id="showNewsletter" href="#">Newsletter Template</a></li><li><a id="showEventReg" href="#">Event Registration Acknowledgement</a></li><li><a id="showEventRegClassic" href="#">Event Registration Acknowledgement (Classic)</a></li><li><a id="showDonation" href="#">Donation Acknowledgement</a></li><li><a id="showEReceipt" href="#">Donation eReceipt</a></li><li><a id="showECards" href="#">Donation eCard Confirmation</a></li><li><a id="showForgotten" href="#">Forgotton Password/User Id</a></li><li><a id="showNewUser" href="#">New User Registration</a></li><li><a id="showPayment" href="#">Payment Acknowlegement</a></li><li><a id="showMembership" href="#">Membership Acknowledgement</a></li><li><a id="showVolunteer" href="#">Volunteer Registration Acknowledgement</a></li></ul><div id="EmailContentWrapper"><div id="EmailContentPane"></div><div id="EmailContentCompiler"></div></div></div><div id="appealTemplate" class="hide AppealTemplate"><table style="border:1px solid #b2b2b2;text-align:left;width:600px" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding:20px;vertical-align:top;text-align:left;border-bottom:2px solid #e2e1e0" id="emailHeader"><img src="/view.image?Id=631" /></td></tr><tr><td><table style="width:100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td class="body" style="padding:10px 20px"><a href="#">Link Website Home</a></td><td class="body" style="padding:10px 20px;text-align:right">June 1, 20--</td></tr></tbody></table></td></tr><tr><td style="padding:20px"><table style="border:2px solid #e2e1e0;background-color:#f2f1f0;width:100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding:10px;vertical-align:top" class="heading" colspan="2">Featured Promotion Title</td></tr><tr><td class="body" style="padding:10px;vertical-align:top"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis quam, volutpat a aliquam ut, imperdiet eget ante. Fusce sit amet commodo arcu.</p><p><a href="#">Sample Link</a></p></td><td style="padding:20px;vertical-align:top"><img src="/view.image?id=540" /></td></tr></tbody></table></td></tr><tr><td style="padding:20px"><table style="width:100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding:0 0 10px;border-bottom:#e2e1e0 1px solid" class="heading">Sample Content Title</td></tr><tr><td class="body" style="padding:10px 0 0;line-height:1.35em;vertical-align:top"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis quam, volutpat a aliquam ut, imperdiet eget ante. Fusce sit amet commodo arcu. Nam fringilla magna at est porttitor adipiscing. Integer dapibus tortor a sem sodales pellentesque. Vestibulum ut viverra est. Maecenas consequat, neque in ultricies dapibus, nunc lectus lobortis est, ac hendrerit nunc sapien et sem. Nulla non odio nec felis lacinia consectetur. Donec eu sem ligula, venenatis aliquam quam. Nulla quis blandit nibh.</p></td></tr></tbody></table></td></tr><tr><td style="padding:10px 20px 20px;vertical-align:top"><table border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding:0 10px"><table style="width:100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding:0 0 10px;border-bottom:#e2e1e0 1px solid" class="heading" colspan="2">Featured Promotion Title</td></tr><tr valign="top"><td style="padding:10px 10px 0 0"><img src="/view.image?id=538" /></td><td class="body" style="padding:10px 0 0;line-height:1.35em"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis quam, volutpat a aliquam ut, imperdiet eget ante. Fusce sit amet commodo arcu.</p></td></tr></tbody></table></td><td style="padding:0 10px"><table style="width:100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding:0 0 10px;border-bottom:#e2e1e0 1px solid" class="heading" colspan="2">Featured Promotion Title</td></tr><tr valign="top"><td style="padding:10px 10px 0 0"><img src="/view.image?id=538" /></td><td class="body" style="padding:10px 0 0;line-height:1.35em"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis quam, volutpat a aliquam ut, imperdiet eget ante. Fusce sit amet commodo arcu.</p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="padding:20px"><table style="width:100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding:0 0 10px;border-bottom:#e2e1e0 1px solid" class="heading">Sample Content Title</td></tr><tr><td class="body" style="padding:10px 0 0;line-height:1.35em"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis quam, volutpat a aliquam ut, imperdiet eget ante. Fusce sit amet commodo arcu. Nam fringilla magna at est porttitor adipiscing. Integer dapibus tortor a sem sodales pellentesque. Vestibulum ut viverra est. Maecenas consequat, neque in ultricies dapibus, nunc lectus lobortis est, ac hendrerit nunc sapien et sem. Nulla non odio nec felis lacinia consectetur. Donec eu sem ligula, venenatis aliquam quam. Nulla quis blandit nibh.</p></td></tr></tbody></table></td></tr><tr><td><table cellspacing="0" cellpadding="0" border="0" class="footer" style="border-top:1px solid #e2e1e0;background:#f2f1f0;width:100%"><tbody><tr><td class="footer" style="padding:20px;border-bottom:1px solid #e2e1e0" colspan="2" align="center"><strong><span class="siteName">Sample Client Name</span></strong>&nbsp;<span class="siteAddr">2000 Daniel Island Drive, Charleston SC</span><br /><span class="sitePhone">Phone: 555-555-5555&nbsp;&nbsp;|&nbsp;&nbsp;</span><span class="siteFax">Fax: 555-555-5555&nbsp;&nbsp;|&nbsp;&nbsp;</span><span class="siteEmail">Email: <a href="mailto:email@email.com">email@email.com</a></span></td></tr><tr><td class="footer" style="padding:10px 20px;border-top:1px solid #fff"><a href="target=&amp;pid=294&amp;did=0&amp;tab=0">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="target=&amp;pid=293&amp;did=0&amp;tab=0">Email Preferences</a></td><td class="footer" style="padding:10px 20px;border-top:1px solid #fff" align="right">&copy; 2013 <span class="siteName">Sample Client Name</span></td></tr></tbody></table></td></tr></tbody></table></div><div id="newsletterTemplate" class="hide NewsletterTemplate"><table style="text-align:center;width:600px" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td class="body" style="padding:10px;font-size:.8em">Having trouble viewing this email? <a href="#">Click here</a> to view it in your browser.</td></tr><tr><td><table style="text-align:left;width:100%;border:1px solid #d2d1d0" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="vertical-align:top;padding:20px;border-bottom:2px solid #e2e1e0"><img src="/view.image?Id=631" /></td></tr><tr><td><table style="width:100%;border-bottom:1px solid #e2e1e0" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td class="body" style="padding:10px 20px"><a href="#">Link Website Home</a></td><td class="body" style="padding:10px 20px;text-align:right">June 1, 20--</td></tr></tbody></table></td></tr><tr><td><table style="width:100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="border-right:#d2d1d0 1px solid;padding:20px;background:#f2f1f0;width:152px;vertical-align:top"><table style="width:100%;font-size:13px;line-height:1.5em" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td class="body" style="padding:0 0 5px"><strong>In this issue:</strong></td></tr><tr><td class="body"><ul style="padding:0;margin:0;list-style-position:inside;list-style-type:square"><li>Topic Number One</li><li>Topic Number Two</li><li>Topic Number Three</li><li>Topic Number Four</li><li>Topic Number Five</li></ul></td></tr><tr><td style="padding:10px 0"><hr /></td></tr><tr><td style="padding:0 0 5px" class="body"><strong>Visit our site:</strong></td></tr><tr><td class="body"><ul style="padding:0;margin:0;list-style-position:inside"><li><a href="#">Quicklink One</a></li><li><a href="#">Quicklink Two</a></li><li><a href="#">Quicklink Three</a></li></ul></td></tr><tr><td style="padding:10px 0"><hr /></td></tr><tr><td style="padding:0 0 5px" class="body"><strong>Join us elsewhere:</strong></td></tr><tr><td class="body">We now have a Facebook group.<br /><a href="#">Follow Us</a></td></tr><tr><td style="padding:10px 0"><hr /></td></tr><tr><td style="padding:0 0 5px" class="body"><strong>Unsubscribe:</strong></td></tr><tr><td class="body">If you no longer wish to receive newsletters...<br /><a href="target=&amp;pid=293&amp;did=0&amp;tab=0" target="">Click here to unsubscribe</a></td></tr></tbody></table></td><td style="padding:20px;vertical-align:top"><table style="width:100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding:0 0 10px;border-bottom:#e2e1e0 1px solid" class="heading">Sample Content Title</td></tr><tr><td style="line-height:1.35em;padding:10px 0 40px" class="body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis quam, volutpat a aliquam ut, imperdiet eget ante. Fusce sit amet commodo arcu. Nam fringilla magna at est porttitor adipiscing. Integer dapibus tortor a sem sodales pellentesque. Vestibulum ut viverra est. Maecenas consequat, neque in ultricies dapibus, nunc lectus lobortis est, ac hendrerit nunc sapien et sem. Nulla non odio nec felis lacinia consectetur. Donec eu sem ligula, venenatis aliquam quam. Nulla quis blandit nibh. </p></td></tr><tr><td style="padding:0 0 10px;border-bottom:#d5d5d5 1px solid" class="heading"> Sample Content Title</td></tr><tr><td style="line-height:1.35em;padding:10px 0 40px" class="body"><p><img src="/view.image?id=538" style="float:left;padding:0 15px 15px 0" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis quam, volutpat a aliquam ut, imperdiet eget ante. Fusce sit amet commodo arcu. Nam fringilla magna at est porttitor adipiscing. Integer dapibus tortor a sem sodales pellentesque. Vestibulum ut viverra est. Maecenas consequat, neque in ultricies dapibus, nunc lectus lobortis est, ac hendrerit nunc sapien et sem. Nulla non odio nec felis lacinia consectetur. Donec eu sem ligula, venenatis aliquam quam. Nulla quis blandit nibh. </p></td></tr><tr><td style="padding:0 0 10px;border-bottom:#e2e1e0 1px solid" class="heading">Sample Content Title</td></tr><tr><td><table style="width:100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding:10px 8px 0 0;line-height:1.35em;vertical-align:top" class="body"><p><img alt="" src="/view.image?id=539" style="display:block;padding:0 0 15px" /></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis quam, volutpat a aliquam ut, imperdiet eget ante. Fusce sit amet commodo arcu</p></td><td style="padding:10px 0 0 8px;line-height:1.35em;vertical-align:top" class="body"><p><img alt="" src="/view.image?id=539" style="display:block;padding:0 0 15px" /></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis quam, volutpat a aliquam ut, imperdiet eget ante. Fusce sit amet commodo arcu</p></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td><table cellspacing="0" cellpadding="0" border="0" class="footer" style="border-top:1px solid #e2e1e0;background:#f2f1f0;width:100%"><tbody><tr><td class="footer" style="padding:20px;border-bottom:1px solid #e2e1e0" colspan="2" align="center"><strong><span class="siteName">Sample Client Name</span></strong>&nbsp;<span class="siteAddr">2000 Daniel Island Drive, Charleston SC</span><br /><span class="sitePhone">Phone: 555-555-5555&nbsp;&nbsp;|&nbsp;&nbsp;</span><span class="siteFax">Fax: 555-555-5555&nbsp;&nbsp;|&nbsp;&nbsp;</span><span class="siteEmail">Email: <a href="mailto:email@email.com">email@email.com</a></span></td></tr><tr><td class="footer" style="padding:10px 20px;border-top:1px solid #fff"><a href="target=&amp;pid=294&amp;did=0&amp;tab=0">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="target=&amp;pid=293&amp;did=0&amp;tab=0">Email Preferences</a></td><td class="footer" style="padding:10px 20px;border-top:1px solid #fff" align="right">&copy; 2013 <span class="siteName">Sample Client Name</span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div id="oneColumnTemplate" class="hide OneColumnTemplate"><table style="width:600px;border:1px solid #ddd" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding:20px;vertical-align:top;text-align:left;border-bottom:2px solid #e2e1e0" id="emailHeader"><img src="/view.image?Id=631" /></td></tr><tr><td style="padding:20px;border-bottom:1px solid #e2e1e0" class="heading">Sample Content Here</td></tr><tr><td style="padding:20px" class="body"><p><strong>Lorem ipsum dolor sit amet</strong><br />Nulla leo justo, tempus vitae facilisis placerat, iaculis quis risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque id arcu mauris, sed porttitor tortor. Integer fermentum leo ac elit dapibus sed viverra magna placerat. Praesent fermentum molestie dictum. Donec non volutpat libero. Proin magna dui, ultrices et rhoncus ut, fermentum non nisl.</p><p>Nulla leo justo, tempus vitae facilisis placerat, iaculis quis risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque id arcu mauris, sed porttitor tortor. Integer fermentum leo ac elit dapibus sed viverra magna placerat. Praesent fermentum molestie dictum. Donec non volutpat libero. Proin magna dui, ultrices et rhoncus ut, fermentum non nisl.</p></td></tr><tr><td><table cellspacing="0" cellpadding="0" border="0" class="footer" style="border-top:1px solid #e2e1e0;background:#f2f1f0;width:100%"><tbody><tr><td class="footer" style="padding:20px;border-bottom:1px solid #e2e1e0" colspan="2" align="center"><strong><span class="siteName">Sample Client Name</span></strong>&nbsp;<span class="siteAddr">2000 Daniel Island Drive, Charleston SC</span><br /><span class="sitePhone">Phone: 555-555-5555&nbsp;&nbsp;|&nbsp;&nbsp;</span><span class="siteFax">Fax: 555-555-5555&nbsp;&nbsp;|&nbsp;&nbsp;</span><span class="siteEmail">Email: <a href="mailto:email@email.com">email@email.com</a></span></td></tr><tr><td class="footer" style="padding:10px 20px;border-top:1px solid #fff"><a href="target=&amp;pid=294&amp;did=0&amp;tab=0">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="target=&amp;pid=293&amp;did=0&amp;tab=0">Email Preferences</a></td><td class="footer" style="padding:10px 20px;border-top:1px solid #fff" align="right">&copy; 2013 <span class="siteName">Sample Client Name</span></td></tr></tbody></table></td></tr></tbody></table></div><div id="linkedContent" class="hide linkedUser"><p>Dear <img src="http://9295.bbnc.bbcust.com/insertField.field?id=93&amp;name=First+Name&amp;type=101" data-runat="server" data-fieldid="93" data-attribid="0" data-searchable="0" data-fieldname="First Name" data-fieldtype="101" data-htmlencode="True" data-rownumber="0" />,</p><p>Thank you for your online registration.&nbsp; However, our records indicate that you previously registered using the below information:</p><p>User ID: <img src="http://9295.bbnc.bbcust.com/insertField.field?id=89&amp;name=User+Name&amp;type=101" data-runat="server" data-fieldid="89" data-attribid="0" data-searchable="0" data-fieldname="User Name" data-fieldtype="101" data-htmlencode="True" data-rownumber="0" /><br />Password: <img src="http://9295.bbnc.bbcust.com/insertField.field?id=91&amp;name=Password&amp;type=101" data-runat="server" data-fieldid="91" data-attribid="0" data-searchable="0" data-fieldname="Password" data-fieldtype="101" data-htmlencode="True" data-rownumber="0" /><br />Reminder Phrase: <img src="http://9295.bbnc.bbcust.com/insertField.field?id=90&amp;name=Reminder+Phrase&amp;type=101" data-runat="server" data-fieldid="90" data-attribid="0" data-searchable="0" data-fieldname="Reminder Phrase" data-fieldtype="101" data-htmlencode="True" data-rownumber="0" /></p><p>To access our organization\'s&nbsp;login page, please <a href="target=&amp;pid=186&amp;did=0&amp;tab=0" target="">click here</a>.&nbsp;</p><p>Thank you&nbsp;again for your&nbsp;interest in our organization!</p><p><a href="target=&amp;pid=187&amp;did=0&amp;tab=0" target="">Privacy&nbsp;Policy</a><br /><a href="target=&amp;pid=213&amp;did=0&amp;tab=0" target="">Email Preferences</a></p></div><div id="forgottenContent" class="hide userForgot"><p>Dear <img src="/insertField.field?id=93&amp;name=First+Name&amp;type=3&amp;nmode=0" data-runat="server" data-fieldid="93" data-attribid="0" data-searchable="0" data-fieldname="First Name" data-fieldtype="3" data-htmlencode="True" data-isloop="False" />,</p><p>Thank you for using our website and online portal.&nbsp; We received your request to reset your password.</p><p>Your username is: <img src="/insertField.field?id=89&amp;nmode=0&amp;name=Email+Address&amp;type=3" style="cursor:move" title="Blackbaud NetCommunity username" data-runat="server" data-fieldid="89" data-attribid="0" data-searchable="0" data-fieldname="Email Address" data-fieldtype="3" data-htmlencode="True" data-isloop="False" />.</p><p>Click the link below to reset your password for our website. For account security, the link is valid for only 24 hours.</p><p><img src="/insertField.field?id=254&amp;name=Password+Reset+Link&amp;type=3&amp;nmode=0" data-runat="server" data-fieldid="254" data-attribid="0" data-searchable="0" data-stripspantags="1" data-fieldname="Password Reset Link" data-fieldtype="3" data-htmlencode="False" data-isloop="False" /></p><p>If you have questions or comments regarding your experience on our website, please reply to this email and we will be happy to assist you.</p><p>Thank you again for visiting our site!</p></div><div id="newUserContent" class="hide userNew"><p><strong>Welcome to Our Online Portal!</strong></p><p>Thank you,&nbsp;<img src="/insertField.field?id=2&amp;name=First+Name&amp;type=1" data-runat="server" data-fieldid="2" data-attribid="0" data-searchable="1" data-fieldname="First Name" data-fieldtype="1" data-htmlencode="True" data-rownumber="0" />, for joining our online portal. Below you will find your User ID for your reference. Please keep this information in a secure place and do not share your password with anyone.</p><p><strong>User ID: </strong><img src="/insertField.field?id=89&amp;name=User+Name&amp;type=3" data-runat="server" data-fieldid="89" data-attribid="0" data-searchable="0" data-fieldname="User Name" data-fieldtype="3" data-htmlencode="True" data-rownumber="0" />&nbsp; <br /><br />We take your privacy and security very seriously.&nbsp; We invite you to take a moment to review our <a href="target=&amp;pid=252&amp;did=0&amp;tab=0">privacy policy</a>.&nbsp;</p><p>You can&nbsp;<a href="target=&amp;pid=291&amp;did=0&amp;tab=0">Login</a> to our website&nbsp;directly.&nbsp;</p><p>We look forward to interacting with you and hope that you enjoy your online experience.&nbsp;</p><p>Thank you for joining our site!</p></div><div id="eReceiptContent" class="hide donationER"><p><img src="/insertField.field?id=30&amp;name=Individual.Begin+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="30" data-attribid="0" data-searchable="0" data-fieldname="Individual.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=2&amp;name=Title&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="2" data-attribid="0" data-searchable="0" data-fieldname="Title" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=3&amp;name=First+Name&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="3" data-attribid="0" data-searchable="0" data-fieldname="First Name" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=4&amp;name=Last+Name&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="4" data-attribid="0" data-searchable="0" data-fieldname="Last Name" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=31&amp;name=Individual.End+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="31" data-attribid="0" data-searchable="0" data-fieldname="Individual.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=32&amp;name=Corporate.Begin+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="32" data-attribid="0" data-searchable="0" data-fieldname="Corporate.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=19&amp;name=Contact+Title&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="19" data-attribid="0" data-searchable="0" data-fieldname="Contact Title" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=20&amp;name=Contact+First+Name&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="20" data-attribid="0" data-searchable="0" data-fieldname="Contact First Name" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=21&amp;name=Contact+Last+Name&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="21" data-attribid="0" data-searchable="0" data-fieldname="Contact Last Name" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=18&amp;name=Company+Name&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="18" data-attribid="0" data-searchable="0" data-fieldname="Company Name" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=33&amp;name=Corporate.End+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="33" data-attribid="0" data-searchable="0" data-fieldname="Corporate.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=67&amp;name=Formatted+Address&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="67" data-attribid="0" data-searchable="0" data-fieldname="Formatted Address" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /></p><p><br />Dear&nbsp;<img src="/insertField.field?id=30&amp;name=Individual.Begin+Section&amp;type=4" data-runat="server" data-fieldid="30" data-attribid="0" data-searchable="0" data-fieldname="Individual.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=2&amp;name=Title&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="2" data-attribid="0" data-searchable="0" data-fieldname="Title" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=4&amp;name=Last+Name&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="4" data-attribid="0" data-searchable="0" data-fieldname="Last Name" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=31&amp;name=Individual.End+Section&amp;type=4" data-runat="server" data-fieldid="31" data-attribid="0" data-searchable="0" data-fieldname="Individual.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=32&amp;name=Corporate.Begin+Section&amp;type=4" data-runat="server" data-fieldid="32" data-attribid="0" data-searchable="0" data-fieldname="Corporate.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=19&amp;name=Contact+Title&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="19" data-attribid="0" data-searchable="0" data-fieldname="Contact Title" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=20&amp;name=Contact+First+Name&amp;type=4" data-runat="server" data-fieldid="20" data-attribid="0" data-searchable="0" data-fieldname="Contact First Name" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=33&amp;name=Corporate.End+Section&amp;type=4" data-runat="server" data-fieldid="33" data-attribid="0" data-searchable="0" data-fieldname="Corporate.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />,</p><p>Thank you for your&nbsp;gift&nbsp;of&nbsp;<img src="/insertField.field?id=12&amp;name=Gift+Amount&amp;type=4" data-runat="server" data-fieldid="12" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />&nbsp;to our organization.&nbsp; The advancements we have made can be attributed in many ways to people like you who have generously supported our mission.&nbsp; We are grateful for your generosity and hope that you will take great pride in the important difference that your support makes.</p><p><img src="/insertField.field?id=100&amp;name=Pledge+Payment.Begin+Section&amp;type=4" title="Begins pledge payment content" data-runat="server" data-fieldid="100" data-attribid="0" data-searchable="0" data-fieldname="Pledge Payment.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> This payment will be applied to your pledge of <img src="/insertField.field?id=101&amp;name=Original+Pledge+Amount&amp;type=4" title="Amount of the original pledge" data-runat="server" data-fieldid="101" data-attribid="0" data-searchable="0" data-fieldname="Original Pledge Amount" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> on <img src="/insertField.field?id=102&amp;name=Original+Pledge+Date&amp;type=4" title="Date of the original pledge" data-runat="server" data-fieldid="102" data-attribid="0" data-searchable="0" data-fieldname="Original Pledge Date" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> . <img src="/insertField.field?id=104&amp;name=Next+Payment.Begin+Section&amp;type=4" title="Begins next payment content" data-runat="server" data-fieldid="104" data-attribid="0" data-searchable="0" data-fieldname="Next Payment.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> Your next payment of <img src="/insertField.field?id=105&amp;name=Next+Installment+Amount&amp;type=4" title="Amount of next outstanding installment" data-runat="server" data-fieldid="105" data-attribid="0" data-searchable="0" data-fieldname="Next Installment Amount" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> is due on <img src="/insertField.field?id=106&amp;nmode=0&amp;name=Next+Installment+Due+Date&amp;type=4" title="Due date of the next installment" data-runat="server" data-fieldid="106" data-attribid="0" data-searchable="0" data-fieldname="Next Installment Due Date" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> . <img src="/insertField.field?id=107&amp;nmode=0&amp;name=Next+Payment.End+Section&amp;type=4" title="Ends next payment content" data-runat="server" data-fieldid="107" data-attribid="0" data-searchable="0" data-fieldname="Next Payment.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> With this payment, your pledge balance is now <img src="/insertField.field?id=103&amp;nmode=0&amp;name=Current+Balance&amp;type=4" title="Current remaining balance of the pledge" data-runat="server" data-fieldid="103" data-attribid="0" data-searchable="0" data-fieldname="Current Balance" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> .<img src="/insertField.field?id=110&amp;name=Pledge+Payment.End+Section&amp;type=4" title="Ends pledge payment content" data-runat="server" data-fieldid="110" data-attribid="0" data-searchable="0" data-fieldname="Pledge Payment.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /></p><p><strong><img src="/insertField.field?id=36&amp;name=Tribute.Begin+Section&amp;type=4" data-runat="server" data-fieldid="36" data-attribid="0" data-searchable="0" data-fieldname="Tribute.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /> </strong>You have made this gift&nbsp;<img src="/insertField.field?id=50&amp;name=Type&amp;type=4" data-runat="server" data-fieldid="50" data-attribid="0" data-searchable="0" data-fieldname="Type" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />&nbsp;<img src="/insertField.field?id=51&amp;name=Name&amp;type=4" data-runat="server" data-fieldid="51" data-attribid="0" data-searchable="0" data-fieldname="Name" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />.&nbsp; <img src="/insertField.field?id=38&amp;name=Acknowledgee.Begin+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="38" data-attribid="0" data-searchable="0" data-fieldname="Acknowledgee.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />A letter of acknowledgment will be sent on your behalf to <img src="/insertField.field?id=53&amp;name=Name&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="53" data-attribid="0" data-searchable="0" data-fieldname="Name" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;at the following address: <img src="/insertField.field?id=72&amp;name=Formatted+Address&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="72" data-attribid="0" data-searchable="0" data-fieldname="Formatted Address" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />.<img src="/insertField.field?id=39&amp;name=Acknowledgee.End+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="39" data-attribid="0" data-searchable="0" data-fieldname="Acknowledgee.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=37&amp;name=Tribute.End+Section&amp;type=4" data-runat="server" data-fieldid="37" data-attribid="0" data-searchable="0" data-fieldname="Tribute.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /></p><h4>Gift Information</h4><p><strong>Gift Amount:</strong>&nbsp;<img src="/insertField.field?id=12&amp;name=Gift+Amount&amp;type=4" data-runat="server" data-fieldid="12" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />&nbsp; <br /><strong>Gift Date:</strong>&nbsp;<img src="/insertField.field?id=13&amp;name=Gift+Date&amp;type=4" data-runat="server" data-fieldid="13" data-attribid="0" data-searchable="0" data-fieldname="Gift Date" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Receipt number:</strong>&nbsp; <img src="/insertField.field?id=74&amp;nmode=0&amp;name=eReceipt+Number&amp;type=4" style="cursor:move" title="eReceipt number" data-runat="server" data-fieldid="74" data-attribid="0" data-searchable="0" data-fieldname="eReceipt Number" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=40&amp;name=Credit+Card.Begin+Section&amp;type=4" data-runat="server" data-fieldid="40" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Payment Method:</strong>&nbsp;<img src="/insertField.field?id=15&amp;name=Card+Type&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="15" data-attribid="0" data-searchable="0" data-fieldname="Card Type" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=22&amp;name=Payment+Method&amp;type=4" data-runat="server" data-fieldid="22" data-attribid="0" data-searchable="0" data-fieldname="Payment Method" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />, <img src="/insertField.field?id=23&amp;name=Card+Number&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="23" data-attribid="0" data-searchable="0" data-fieldname="Card Number" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=41&amp;name=Credit+Card.End+Section&amp;type=4" data-runat="server" data-fieldid="41" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=42&amp;name=Direct+Debit.Begin+Section&amp;type=4" data-runat="server" data-fieldid="42" data-attribid="0" data-searchable="0" data-fieldname="Direct Debit.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Payment Method:</strong>&nbsp;Direct debit from your <img src="/insertField.field?id=26&amp;name=Account+Type&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="26" data-attribid="0" data-searchable="0" data-fieldname="Account Type" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;Account at <img src="/insertField.field?id=24&amp;name=Financial+Institution&amp;type=4" data-runat="server" data-fieldid="24" data-attribid="0" data-searchable="0" data-fieldname="Financial Institution" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />, <img src="/insertField.field?id=28&amp;name=Account+Number&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="28" data-attribid="0" data-searchable="0" data-fieldname="Account Number" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=43&amp;name=Direct+Debit.End+Section&amp;type=4" data-runat="server" data-fieldid="43" data-attribid="0" data-searchable="0" data-fieldname="Direct Debit.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=46&amp;name=Recurring+Information.Begin+Section&amp;type=4" data-runat="server" data-fieldid="46" data-attribid="0" data-searchable="0" data-fieldname="Recurring Information.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Frequency:</strong>&nbsp;<img src="/insertField.field?id=60&amp;name=Frequency&amp;type=4" data-runat="server" data-fieldid="60" data-attribid="0" data-searchable="0" data-fieldname="Frequency" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Starting On:</strong>&nbsp;<img src="/insertField.field?id=61&amp;name=Starting+Date&amp;type=4" data-runat="server" data-fieldid="61" data-attribid="0" data-searchable="0" data-fieldname="Starting Date" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=48&amp;name=Begin+Ending+Date+Section&amp;type=4" data-runat="server" data-fieldid="48" data-attribid="0" data-searchable="0" data-fieldname="Begin Ending Date Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Ending On:</strong>&nbsp;<img src="/insertField.field?id=62&amp;nmode=0&amp;name=Ending+Date&amp;type=4" title="Recurring gift end date" data-runat="server" data-fieldid="62" data-attribid="0" data-searchable="0" data-fieldname="Ending Date" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=49&amp;name=End+Ending+Date+Section&amp;type=4" data-runat="server" data-fieldid="49" data-attribid="0" data-searchable="0" data-fieldname="End Ending Date Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=47&amp;name=Recurring+Information.End+Section&amp;type=4" data-runat="server" data-fieldid="47" data-attribid="0" data-searchable="0" data-fieldname="Recurring Information.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><img src="/insertField.field?id=84&amp;nmode=0&amp;name=Installment+Schedule.Begin+Section&amp;type=4" title="Begins installment schedule content" data-runat="server" data-fieldid="84" data-attribid="0" data-searchable="0" data-fieldname="Installment Schedule.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><span style="font-weight:bold">Number of Installments:</span><img src="/insertField.field?id=85&amp;nmode=0&amp;name=Number+of+Installments&amp;type=4" title="Number of installment payments" data-runat="server" data-fieldid="85" data-attribid="0" data-searchable="0" data-fieldname="Number of Installments" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><span style="font-weight:bold">Amount of First Installment:</span><img src="/insertField.field?id=86&amp;nmode=0&amp;name=First+Installment+Amount&amp;type=4" title="Amount of the first installment payment" data-runat="server" data-fieldid="86" data-attribid="0" data-searchable="0" data-fieldname="First Installment Amount" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><span style="font-weight:bold">Frequency:</span><img src="/insertField.field?id=87&amp;nmode=0&amp;name=Frequency&amp;type=4" title="Installment gift frequency" data-runat="server" data-fieldid="87" data-attribid="0" data-searchable="0" data-fieldname="Frequency" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><span style="font-weight:bold">Starting On:</span><img src="/insertField.field?id=88&amp;nmode=0&amp;name=Starting+Date&amp;type=4" title="Date of first installment" data-runat="server" data-fieldid="88" data-attribid="0" data-searchable="0" data-fieldname="Starting Date" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><span style="font-weight:bold">Ending On:</span><img src="/insertField.field?id=89&amp;nmode=0&amp;name=Ending+Date&amp;type=4" title="Date of last installment" data-runat="server" data-fieldid="89" data-attribid="0" data-searchable="0" data-fieldname="Ending Date" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=90&amp;nmode=0&amp;name=Installment+Schedule.End+Section&amp;type=4" title="Ends installment schedule content" data-runat="server" data-fieldid="90" data-attribid="0" data-searchable="0" data-fieldname="Installment Schedule.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /></p><p><img src="/insertField.field?id=81&amp;name=Anonymous+Begin+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="81" data-attribid="0" data-searchable="0" data-fieldname="Anonymous Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />As you requested, this gift will remain anonymous.<img src="/insertField.field?id=82&amp;name=Anonymous+End+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="82" data-attribid="0" data-searchable="0" data-fieldname="Anonymous End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /></p><p>On behalf of our entire organization, thank you again for your generous gift.</p></div><div id="eCardContent" class="hide ecardTY"><p><span style="font-size:10pt;font-family:Arial">Dear <img src="/insertField.field?id=10&amp;name=Recipients+name&amp;type=315&amp;nmode=0" data-runat="server" data-fieldid="10" data-attribid="0" data-searchable="0" data-fieldname="Recipients name" data-fieldtype="315" data-htmlencode="True" data-isloop="False" />,<br /><br /><img src="/insertField.field?id=7&amp;name=Senders+name&amp;type=315&amp;nmode=0" data-runat="server" data-fieldid="7" data-attribid="0" data-searchable="0" data-fieldname="Senders name" data-fieldtype="315" data-htmlencode="True" data-isloop="False" />&nbsp;has sent you an eCard! To view your eCard, click below.<br /><br /><img src="/insertField.field?id=5&amp;name=Begin+hyperlink+to+eCard&amp;type=315&amp;nmode=0" data-runat="server" data-fieldid="5" data-attribid="0" data-searchable="0" data-stripspantags="1" data-fieldname="Begin hyperlink to eCard" data-fieldtype="315" data-htmlencode="False" data-isloop="False" /> Open your eCard now! <img src="/insertField.field?id=6&amp;name=End+hyperlink+to+eCard&amp;type=315&amp;nmode=0" data-runat="server" data-fieldid="6" data-attribid="0" data-searchable="0" data-stripspantags="1" data-fieldname="End hyperlink to eCard" data-fieldtype="315" data-htmlencode="False" data-isloop="False" /><br /><br />Have a great day!<br /><br /><a href="target=&amp;pid=294&amp;did=0&amp;tab=0">privacy policy</a> | <a href="target=&amp;pid=293&amp;did=0&amp;tab=0">email preferences</a><br /></span></p></div><div id="donationContent" class="hide donationTY"><p>Dear&nbsp;<img src="/insertField.field?id=30&amp;name=Individual.Begin+Section&amp;type=4" data-runat="server" data-fieldid="30" data-attribid="0" data-searchable="0" data-fieldname="Individual.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=3&amp;name=First+Name&amp;type=4" data-runat="server" data-fieldid="3" data-attribid="0" data-searchable="0" data-fieldname="First Name" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=31&amp;name=Individual.End+Section&amp;type=4" data-runat="server" data-fieldid="31" data-attribid="0" data-searchable="0" data-fieldname="Individual.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=32&amp;name=Corporate.Begin+Section&amp;type=4" data-runat="server" data-fieldid="32" data-attribid="0" data-searchable="0" data-fieldname="Corporate.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=20&amp;name=Contact+First+Name&amp;type=4" data-runat="server" data-fieldid="20" data-attribid="0" data-searchable="0" data-fieldname="Contact First Name" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=33&amp;name=Corporate.End+Section&amp;type=4" data-runat="server" data-fieldid="33" data-attribid="0" data-searchable="0" data-fieldname="Corporate.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />,</p><p>Thank you for your<img src="/insertField.field?id=34&amp;name=Pledge.Begin+Section&amp;type=4" data-runat="server" data-fieldid="34" data-attribid="0" data-searchable="0" data-fieldname="Pledge.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />&nbsp;pledge<img src="/insertField.field?id=35&amp;name=Pledge.End+Section&amp;type=4" data-runat="server" data-fieldid="35" data-attribid="0" data-searchable="0" data-fieldname="Pledge.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=40&amp;name=Credit+Card.Begin+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="40" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;gift<img src="/insertField.field?id=41&amp;name=Credit+Card.End+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="41" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=42&amp;name=Direct+Debit.Begin+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="42" data-attribid="0" data-searchable="0" data-fieldname="Direct Debit.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;gift<img src="/insertField.field?id=43&amp;name=Direct+Debit.End+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="43" data-attribid="0" data-searchable="0" data-fieldname="Direct Debit.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;of&nbsp;<img src="/insertField.field?id=12&amp;name=Gift+Amount&amp;type=4" data-runat="server" data-fieldid="12" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />&nbsp;to our organization.&nbsp; The advancements we have made can be attributed in many ways to people like you who have generously supported our mission.&nbsp; We are grateful for your generosity and hope that you will take great pride in the important difference that your gift makes.</p><p><img src="/insertField.field?id=100&amp;name=Pledge+Payment.Begin+Section&amp;type=4" title="Begins pledge payment content" data-runat="server" data-fieldid="100" data-attribid="0" data-searchable="0" data-fieldname="Pledge Payment.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> This payment will be applied to your pledge of <img src="/insertField.field?id=101&amp;name=Original+Pledge+Amount&amp;type=4" title="Amount of the original pledge" data-runat="server" data-fieldid="101" data-attribid="0" data-searchable="0" data-fieldname="Original Pledge Amount" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> on <img src="/insertField.field?id=102&amp;name=Original+Pledge+Date&amp;type=4" title="Date of the original pledge" data-runat="server" data-fieldid="102" data-attribid="0" data-searchable="0" data-fieldname="Original Pledge Date" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> . <img src="/insertField.field?id=104&amp;name=Next+Payment.Begin+Section&amp;type=4" title="Begins next payment content" data-runat="server" data-fieldid="104" data-attribid="0" data-searchable="0" data-fieldname="Next Payment.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> Your next payment of <img src="/insertField.field?id=105&amp;name=Next+Installment+Amount&amp;type=4" title="Amount of next outstanding installment" data-runat="server" data-fieldid="105" data-attribid="0" data-searchable="0" data-fieldname="Next Installment Amount" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> is due on <img src="/insertField.field?id=106&amp;nmode=0&amp;name=Next+Installment+Due+Date&amp;type=4" title="Due date of the next installment" data-runat="server" data-fieldid="106" data-attribid="0" data-searchable="0" data-fieldname="Next Installment Due Date" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> . <img src="/insertField.field?id=107&amp;nmode=0&amp;name=Next+Payment.End+Section&amp;type=4" title="Ends next payment content" data-runat="server" data-fieldid="107" data-attribid="0" data-searchable="0" data-fieldname="Next Payment.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> With this payment, your pledge balance is now <img src="/insertField.field?id=103&amp;nmode=0&amp;name=Current+Balance&amp;type=4" title="Current remaining balance of the pledge" data-runat="server" data-fieldid="103" data-attribid="0" data-searchable="0" data-fieldname="Current Balance" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> .<img src="/insertField.field?id=110&amp;name=Pledge+Payment.End+Section&amp;type=4" title="Ends pledge payment content" data-runat="server" data-fieldid="110" data-attribid="0" data-searchable="0" data-fieldname="Pledge Payment.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /></p><p style="margin-right:0" dir="ltr"><strong><img src="/insertField.field?id=36&amp;name=Tribute.Begin+Section&amp;type=4" data-runat="server" data-fieldid="36" data-attribid="0" data-searchable="0" data-fieldname="Tribute.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /> </strong>You have made this gift&nbsp;<img src="/insertField.field?id=50&amp;name=Type&amp;type=4" data-runat="server" data-fieldid="50" data-attribid="0" data-searchable="0" data-fieldname="Type" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />&nbsp;<img src="/insertField.field?id=51&amp;name=Name&amp;type=4" data-runat="server" data-fieldid="51" data-attribid="0" data-searchable="0" data-fieldname="Name" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />.&nbsp; <img src="/insertField.field?id=38&amp;name=Acknowledgee.Begin+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="38" data-attribid="0" data-searchable="0" data-fieldname="Acknowledgee.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />A letter of acknowledgment will be sent on your behalf to <img src="/insertField.field?id=53&amp;name=Name&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="53" data-attribid="0" data-searchable="0" data-fieldname="Name" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;at the following address: <img src="/insertField.field?id=72&amp;name=Formatted+Address&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="72" data-attribid="0" data-searchable="0" data-fieldname="Formatted Address" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />.<img src="/insertField.field?id=39&amp;name=Acknowledgee.End+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="39" data-attribid="0" data-searchable="0" data-fieldname="Acknowledgee.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=37&amp;name=Tribute.End+Section&amp;type=4" data-runat="server" data-fieldid="37" data-attribid="0" data-searchable="0" data-fieldname="Tribute.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /></p><p>Below is a summary of your <img src="/insertField.field?id=34&amp;name=Pledge.Begin+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="34" data-attribid="0" data-searchable="0" data-fieldname="Pledge.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />pledge.<img src="/insertField.field?id=35&amp;name=Pledge.End+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="35" data-attribid="0" data-searchable="0" data-fieldname="Pledge.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=40&amp;name=Credit+Card.Begin+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="40" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />gift.<img src="/insertField.field?id=41&amp;name=Credit+Card.End+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="41" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=42&amp;name=Direct+Debit.Begin+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="42" data-attribid="0" data-searchable="0" data-fieldname="Direct Debit.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />gift.<img src="/insertField.field?id=43&amp;name=Direct+Debit.End+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="43" data-attribid="0" data-searchable="0" data-fieldname="Direct Debit.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=79&amp;name=eReceipt.Begin+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="79" data-attribid="0" data-searchable="0" data-fieldname="eReceipt.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />You can also access a receipt online by clicking on this link: <img src="/insertField.field?id=75&amp;name=eReceipt+Download+URL&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="75" data-attribid="0" data-searchable="0" data-fieldname="eReceipt Download URL" data-fieldtype="4" data-htmlencode="False" data-isloop="False" /><img src="/insertField.field?id=80&amp;name=eReceipt.End+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="80" data-attribid="0" data-searchable="0" data-fieldname="eReceipt.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;<br /><img src="/insertField.field?id=40&amp;name=Credit+Card.Begin+Section&amp;type=4" data-runat="server" data-fieldid="40" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Amount:</strong>&nbsp;<img src="/insertField.field?id=12&amp;name=Gift+Amount&amp;type=4" data-runat="server" data-fieldid="12" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Payment Method:</strong>&nbsp;<img src="/insertField.field?id=15&amp;name=Card+Type&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="15" data-attribid="0" data-searchable="0" data-fieldname="Card Type" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=22&amp;name=Payment+Method&amp;type=4" data-runat="server" data-fieldid="22" data-attribid="0" data-searchable="0" data-fieldname="Payment Method" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />, <img src="/insertField.field?id=23&amp;name=Card+Number&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="23" data-attribid="0" data-searchable="0" data-fieldname="Card Number" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><strong>Date:</strong>&nbsp;<img src="/insertField.field?id=13&amp;name=Gift+Date&amp;type=4" data-runat="server" data-fieldid="13" data-attribid="0" data-searchable="0" data-fieldname="Gift Date" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Designation:</strong>&nbsp;<img src="/insertField.field?id=17&amp;name=Designation&amp;type=4" data-runat="server" data-fieldid="17" data-attribid="0" data-searchable="0" data-fieldname="Designation" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=41&amp;name=Credit+Card.End+Section&amp;type=4" data-runat="server" data-fieldid="41" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><img src="/insertField.field?id=42&amp;name=Direct+Debit.Begin+Section&amp;type=4" data-runat="server" data-fieldid="42" data-attribid="0" data-searchable="0" data-fieldname="Direct Debit.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><strong> <strong>Amount:</strong>&nbsp;<img src="/insertField.field?id=12&amp;name=Gift+Amount&amp;type=4" data-runat="server" data-fieldid="12" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />&nbsp; <br />Payment Method: </strong>&nbsp;Direct Debit from your <img src="/insertField.field?id=26&amp;name=Account+Type&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="26" data-attribid="0" data-searchable="0" data-fieldname="Account Type" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />&nbsp;Account at <img src="/insertField.field?id=24&amp;name=Financial+Institution&amp;type=4" data-runat="server" data-fieldid="24" data-attribid="0" data-searchable="0" data-fieldname="Financial Institution" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />&nbsp;(<img src="/insertField.field?id=28&amp;name=Account+Number&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="28" data-attribid="0" data-searchable="0" data-fieldname="Account Number" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />)<br /><strong>Date:</strong>&nbsp;<img src="/insertField.field?id=13&amp;name=Gift+Date&amp;type=4" data-runat="server" data-fieldid="13" data-attribid="0" data-searchable="0" data-fieldname="Gift Date" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Designation:</strong>&nbsp;<img src="/insertField.field?id=17&amp;name=Designation&amp;type=4" data-runat="server" data-fieldid="17" data-attribid="0" data-searchable="0" data-fieldname="Designation" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=43&amp;name=Direct+Debit.End+Section&amp;type=4" data-runat="server" data-fieldid="43" data-attribid="0" data-searchable="0" data-fieldname="Direct Debit.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><img src="/insertField.field?id=34&amp;name=Pledge.Begin+Section&amp;type=4" data-runat="server" data-fieldid="34" data-attribid="0" data-searchable="0" data-fieldname="Pledge.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><strong>Pledge </strong><strong>Amount:</strong>&nbsp;<img src="/insertField.field?id=12&amp;name=Gift+Amount&amp;type=4" data-runat="server" data-fieldid="12" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Date:</strong>&nbsp;<img src="/insertField.field?id=13&amp;name=Gift+Date&amp;type=4" data-runat="server" data-fieldid="13" data-attribid="0" data-searchable="0" data-fieldname="Gift Date" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Designation:</strong>&nbsp;<img src="/insertField.field?id=17&amp;name=Designation&amp;type=4" data-runat="server" data-fieldid="17" data-attribid="0" data-searchable="0" data-fieldname="Designation" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=35&amp;name=Pledge.End+Section&amp;type=4" data-runat="server" data-fieldid="35" data-attribid="0" data-searchable="0" data-fieldname="Pledge.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><img src="/insertField.field?id=46&amp;name=Recurring+Information.Begin+Section&amp;type=4" data-runat="server" data-fieldid="46" data-attribid="0" data-searchable="0" data-fieldname="Recurring Information.Begin Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><strong>Frequency:</strong>&nbsp;<img src="/insertField.field?id=60&amp;name=Frequency&amp;type=4" data-runat="server" data-fieldid="60" data-attribid="0" data-searchable="0" data-fieldname="Frequency" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Starting On:</strong>&nbsp;<img src="/insertField.field?id=61&amp;name=Starting+Date&amp;type=4" data-runat="server" data-fieldid="61" data-attribid="0" data-searchable="0" data-fieldname="Starting Date" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" />&nbsp;&nbsp;<img src="/insertField.field?id=48&amp;name=Begin+Ending+Date+Section&amp;type=4" data-runat="server" data-fieldid="48" data-attribid="0" data-searchable="0" data-fieldname="Begin Ending Date Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><strong>Ending On:</strong>&nbsp;<img src="/insertField.field?id=62&amp;nmode=0&amp;name=Ending+Date&amp;type=4" title="Recurring gift end date" data-runat="server" data-fieldid="62" data-attribid="0" data-searchable="0" data-fieldname="Ending Date" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> <img src="/insertField.field?id=49&amp;name=End+Ending+Date+Section&amp;type=4" data-runat="server" data-fieldid="49" data-attribid="0" data-searchable="0" data-fieldname="End Ending Date Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><img src="/insertField.field?id=47&amp;name=Recurring+Information.End+Section&amp;type=4" data-runat="server" data-fieldid="47" data-attribid="0" data-searchable="0" data-fieldname="Recurring Information.End Section" data-fieldtype="4" data-htmlencode="True" data-rownumber="0" /><br /><img src="/insertField.field?id=84&amp;nmode=0&amp;name=Installment+Schedule.Begin+Section&amp;type=4" title="Begins installment schedule content" data-runat="server" data-fieldid="84" data-attribid="0" data-searchable="0" data-fieldname="Installment Schedule.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><strong>Number of Installments:</strong><img src="/insertField.field?id=85&amp;nmode=0&amp;name=Number+of+Installments&amp;type=4" title="Number of installment payments" data-runat="server" data-fieldid="85" data-attribid="0" data-searchable="0" data-fieldname="Number of Installments" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><strong>Amount of First Installment: </strong><img src="/insertField.field?id=86&amp;nmode=0&amp;name=First+Installment+Amount&amp;type=4" title="Amount of the first installment payment" data-runat="server" data-fieldid="86" data-attribid="0" data-searchable="0" data-fieldname="First Installment Amount" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><strong>Frequency:</strong><img src="/insertField.field?id=87&amp;nmode=0&amp;name=Frequency&amp;type=4" title="Installment gift frequency" data-runat="server" data-fieldid="87" data-attribid="0" data-searchable="0" data-fieldname="Frequency" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><strong>Starting On:</strong><img src="/insertField.field?id=88&amp;nmode=0&amp;name=Starting+Date&amp;type=4" title="Date of first installment" data-runat="server" data-fieldid="88" data-attribid="0" data-searchable="0" data-fieldname="Starting Date" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><strong>Ending On:</strong><img src="/insertField.field?id=89&amp;nmode=0&amp;name=Ending+Date&amp;type=4" title="Date of last installment" data-runat="server" data-fieldid="89" data-attribid="0" data-searchable="0" data-fieldname="Ending Date" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=90&amp;nmode=0&amp;name=Installment+Schedule.End+Section&amp;type=4" style="cursor:move" title="Ends installment schedule content" data-runat="server" data-fieldid="90" data-attribid="0" data-searchable="0" data-fieldname="Installment Schedule.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=81&amp;name=Anonymous+Begin+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="81" data-attribid="0" data-searchable="0" data-fieldname="Anonymous Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /><br />As you requested, this gift will remain anonymous.<img src="/insertField.field?id=82&amp;name=Anonymous+End+Section&amp;type=4&amp;nmode=0" data-runat="server" data-fieldid="82" data-attribid="0" data-searchable="0" data-fieldname="Anonymous End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /></p><p><img src="/insertField.field?id=95&amp;nmode=0&amp;name=Payment+Cart.Begin+Section&amp;type=4" title="Begins payment cart content" data-runat="server" data-fieldid="95" data-attribid="0" data-searchable="0" data-fieldname="Payment Cart.Begin Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />This donation of <img src="/insertField.field?id=96&amp;nmode=0&amp;name=Gift+Amount&amp;type=4" title="Amount given for this gift" data-runat="server" data-fieldid="96" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> is part of your <img src="/insertField.field?id=97&amp;nmode=0&amp;name=Cart+Amount&amp;type=4" title="Total amount given for this payment cart" data-runat="server" data-fieldid="97" data-attribid="0" data-searchable="0" data-fieldname="Cart Amount" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /> transaction on <img src="/insertField.field?id=98&amp;nmode=0&amp;name=Cart+Date&amp;type=4" title="Date of payment cart transaction" data-runat="server" data-fieldid="98" data-attribid="0" data-searchable="0" data-fieldname="Cart Date" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />. You may receive multiple notifications, but your credit card was only charged once for <img src="/insertField.field?id=97&amp;nmode=0&amp;name=Cart+Amount&amp;type=4" title="Total amount given for this payment cart" data-runat="server" data-fieldid="97" data-attribid="0" data-searchable="0" data-fieldname="Cart Amount" data-fieldtype="4" data-htmlencode="True" data-isloop="False" />.<img src="/insertField.field?id=99&amp;nmode=0&amp;name=Payment+Cart.End+Section&amp;type=4" title="Ends payment cart content" data-runat="server" data-fieldid="99" data-attribid="0" data-searchable="0" data-fieldname="Payment Cart.End Section" data-fieldtype="4" data-htmlencode="True" data-isloop="False" /></p><p>On behalf of our entire organization, thank you again for your generous gift.</p></div><div id="memberContent" class="hide memberNew"><h3>Thank you for <img src="/insertField.field?id=25&amp;name=Join+Information.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="25" data-attribid="0" data-searchable="0" data-fieldname="Join Information.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />joining!<img src="/insertField.field?id=26&amp;name=Join+Information.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="26" data-attribid="0" data-searchable="0" data-fieldname="Join Information.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=27&amp;name=Renew+Information.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="27" data-attribid="0" data-searchable="0" data-fieldname="Renew Information.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />renewing your membership!<img src="/insertField.field?id=28&amp;name=Renew+Information.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="28" data-attribid="0" data-searchable="0" data-fieldname="Renew Information.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /></h3><p>The advancements we have made can be attributed in many ways to people like you who have generously supported our mission. We are grateful for your generosity and hope that you will take great pride in the important difference that your membership will make.&nbsp; <img src="/insertField.field?id=33&amp;name=Gift+of+Membership.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="33" data-attribid="0" data-searchable="0" data-fieldname="Gift of Membership.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />We are sure <img src="/insertField.field?id=35&amp;name=First+Name&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="35" data-attribid="0" data-searchable="0" data-fieldname="First Name" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;will enjoy the wonderful gift of membership!<img src="/insertField.field?id=47&amp;name=Gift+of+Membership.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="47" data-attribid="0" data-searchable="0" data-fieldname="Gift of Membership.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp; <img src="/insertField.field?id=18&amp;name=Additional+Donation.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="18" data-attribid="0" data-searchable="0" data-fieldname="Additional Donation.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />Your additional gift of <img src="/insertField.field?id=19&amp;name=Amount&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="19" data-attribid="0" data-searchable="0" data-fieldname="Amount " data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;in addition to the membership is greatly appreciated.&nbsp; We are fortunate to have&nbsp;such committed&nbsp;supporters like you who provide additional support to&nbsp;further our mission.&nbsp;<img src="/insertField.field?id=20&amp;name=Additional+Donation.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="20" data-attribid="0" data-searchable="0" data-fieldname="Additional Donation.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /></p><p>The information about the membership is summarized&nbsp;below.&nbsp;&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp; Membership: <img src="/insertField.field?id=21&amp;name=Category&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="21" data-attribid="0" data-searchable="0" data-fieldname="Category " data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=29&amp;name=Benefits.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="29" data-attribid="0" data-searchable="0" data-fieldname="Benefits.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><br />&nbsp;&nbsp;&nbsp;&nbsp; Benefits:&nbsp; <img src="/insertField.field?id=24&amp;name=Benefits&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="24" data-attribid="0" data-searchable="0" data-fieldname="Benefits " data-fieldtype="6" data-htmlencode="False" data-isloop="False" /><img src="/insertField.field?id=30&amp;name=Benefits.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="30" data-attribid="0" data-searchable="0" data-fieldname="Benefits.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=31&amp;name=Waive+Benefits.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="31" data-attribid="0" data-searchable="0" data-fieldname="Waive Benefits.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><br />&nbsp;&nbsp;&nbsp;&nbsp; You have indicated that you wish to waive the benefits of this membership.<img src="/insertField.field?id=32&amp;name=Waive+Benefits.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="32" data-attribid="0" data-searchable="0" data-fieldname="Waive Benefits.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=33&amp;name=Gift+of+Membership.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="33" data-attribid="0" data-searchable="0" data-fieldname="Gift of Membership.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><br />&nbsp;&nbsp;&nbsp;&nbsp; This membership is a gift for: <img src="/insertField.field?id=35&amp;name=First+Name&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="35" data-attribid="0" data-searchable="0" data-fieldname="First Name" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=36&amp;name=Last+Name&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="36" data-attribid="0" data-searchable="0" data-fieldname="Last Name" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=47&amp;name=Gift+of+Membership.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="47" data-attribid="0" data-searchable="0" data-fieldname="Gift of Membership.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=91&amp;name=Cards.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="91" data-attribid="0" data-searchable="0" data-fieldname="Cards.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><br />&nbsp;&nbsp;&nbsp;&nbsp; The name on the Membership Card will be: <img src="/insertField.field?id=83&amp;name=Primary+Name&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="83" data-attribid="0" data-searchable="0" data-fieldname="Primary Name" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />. &nbsp;<img src="/insertField.field?id=93&amp;name=Addtional+Members.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="93" data-attribid="0" data-searchable="0" data-fieldname="Addtional Members.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />The following people will be included in the membership:<br /><img src="/insertField.field?id=85&amp;name=Additional+Member+Begin+Loop&amp;type=6&amp;nmode=1" data-runat="server" data-fieldid="85" data-attribid="0" data-searchable="0" data-fieldname="Additional Member Begin Loop" data-fieldtype="6" data-htmlencode="True" data-isloop="True" data-counterfid="90" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="/insertField.field?id=86&amp;name=Additional+Name&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="86" data-attribid="0" data-searchable="0" data-fieldname="Additional Name" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=90&amp;name=Additional+Member+End+Loop&amp;type=6&amp;nmode=1" data-runat="server" data-fieldid="90" data-attribid="0" data-searchable="0" data-fieldname="Additional Member End Loop" data-fieldtype="6" data-htmlencode="True" data-isloop="True" data-counterfid="85" /><img src="/insertField.field?id=94&amp;name=Addtional+Members.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="94" data-attribid="0" data-searchable="0" data-fieldname="Addtional Members.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=92&amp;name=Cards.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="92" data-attribid="0" data-searchable="0" data-fieldname="Cards.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=52&amp;name=Free+Membership.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="52" data-attribid="0" data-searchable="0" data-fieldname="Free Membership.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;&nbsp;&nbsp;&nbsp; This is a free membership--no dues are required.<img src="/insertField.field?id=53&amp;name=Free+Membership.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="53" data-attribid="0" data-searchable="0" data-fieldname="Free Membership.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=54&amp;name=Paid+Membership.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="54" data-attribid="0" data-searchable="0" data-fieldname="Paid Membership.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;&nbsp;&nbsp;&nbsp; Dues for this membership is: &nbsp; <img src="/insertField.field?id=23&amp;name=Amount&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="23" data-attribid="0" data-searchable="0" data-fieldname="Amount " data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=55&amp;name=Paid+Membership.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="55" data-attribid="0" data-searchable="0" data-fieldname="Paid Membership.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=18&amp;name=Additional+Donation.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="18" data-attribid="0" data-searchable="0" data-fieldname="Additional Donation.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><br />&nbsp;&nbsp;&nbsp;&nbsp; The additional gift you gave is: <img src="/insertField.field?id=19&amp;name=Amount&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="19" data-attribid="0" data-searchable="0" data-fieldname="Amount " data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=20&amp;name=Additional+Donation.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="20" data-attribid="0" data-searchable="0" data-fieldname="Additional Donation.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><br />&nbsp;&nbsp;&nbsp;&nbsp; Total Amount: <img src="/insertField.field?id=12&amp;name=Gift+Amount&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="12" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><br />&nbsp;&nbsp;&nbsp;&nbsp; Date:&nbsp; <img src="/insertField.field?id=14&amp;name=Gift+Date&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="14" data-attribid="0" data-searchable="0" data-fieldname="Gift Date" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><br /><br /><img src="/insertField.field?id=100&amp;nmode=0&amp;name=Installment+Schedule.Begin+Section&amp;type=6" style="cursor:move" title="Begins installment schedule content" data-runat="server" data-fieldid="100" data-attribid="0" data-searchable="0" data-fieldname="Installment Schedule.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />There will be&nbsp;<img src="/insertField.field?id=101&amp;nmode=0&amp;name=Number+of+Installments&amp;type=6" style="cursor:move" title="Number of installment payments" data-runat="server" data-fieldid="101" data-attribid="0" data-searchable="0" data-fieldname="Number of Installments" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /> installments of&nbsp;<img src="/insertField.field?id=102&amp;nmode=0&amp;name=First+Installment+Amount&amp;type=6" style="cursor:move" title="Amount of the first installment payment" data-runat="server" data-fieldid="102" data-attribid="0" data-searchable="0" data-fieldname="First Installment Amount" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /> made on&nbsp;<img src="/insertField.field?id=103&amp;nmode=0&amp;name=Frequency&amp;type=6" style="cursor:move" title="Installment gift frequency" data-runat="server" data-fieldid="103" data-attribid="0" data-searchable="0" data-fieldname="Frequency" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /> starting on&nbsp;<img src="/insertField.field?id=104&amp;nmode=0&amp;name=Starting+Date&amp;type=6" style="cursor:move" title="Date of first installment" data-runat="server" data-fieldid="104" data-attribid="0" data-searchable="0" data-fieldname="Starting Date" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /> and ending on <img src="/insertField.field?id=105&amp;nmode=0&amp;name=Ending+Date&amp;type=6" style="cursor:move" title="Date of last installment" data-runat="server" data-fieldid="105" data-attribid="0" data-searchable="0" data-fieldname="Ending Date" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />.<img src="/insertField.field?id=106&amp;nmode=0&amp;name=Installment+Schedule.End+Section&amp;type=6" style="cursor:move" title="Ends installment schedule content" data-runat="server" data-fieldid="106" data-attribid="0" data-searchable="0" data-fieldname="Installment Schedule.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=69&amp;name=Credit+Card.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="69" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;&nbsp;&nbsp;&nbsp; Method of Payment:&nbsp; <img src="/insertField.field?id=16&amp;name=Card+Type&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="16" data-attribid="0" data-searchable="0" data-fieldname="Card Type" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=68&amp;name=Payment+Method&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="68" data-attribid="0" data-searchable="0" data-fieldname="Payment Method" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;(<img src="/insertField.field?id=56&amp;name=Card+Number&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="56" data-attribid="0" data-searchable="0" data-fieldname="Card Number" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />)<img src="/insertField.field?id=70&amp;name=Credit+Card.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="70" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=71&amp;name=Direct+Debit.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="71" data-attribid="0" data-searchable="0" data-fieldname="Direct Debit.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;&nbsp;&nbsp;&nbsp; Method of Payment:&nbsp;&nbsp;<img src="/insertField.field?id=68&amp;name=Payment+Method&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="68" data-attribid="0" data-searchable="0" data-fieldname="Payment Method" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /> from your <img src="/insertField.field?id=74&amp;name=Account+Type&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="74" data-attribid="0" data-searchable="0" data-fieldname="Account Type" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;Account at&nbsp;<img src="/insertField.field?id=72&amp;name=Financial+Institution&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="72" data-attribid="0" data-searchable="0" data-fieldname="Financial Institution" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;(<img src="/insertField.field?id=75&amp;name=Account+Number&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="75" data-attribid="0" data-searchable="0" data-fieldname="Account Number" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />)<img src="/insertField.field?id=78&amp;name=Direct+Debit.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="78" data-attribid="0" data-searchable="0" data-fieldname="Direct Debit.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=50&amp;name=Pledge+Information.Begin+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="50" data-attribid="0" data-searchable="0" data-fieldname="Pledge Information.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />&nbsp;&nbsp;&nbsp;&nbsp; This is a pledge of Membership<img src="/insertField.field?id=51&amp;name=Pledge+Information.End+Section&amp;type=6&amp;nmode=0" data-runat="server" data-fieldid="51" data-attribid="0" data-searchable="0" data-fieldname="Pledge Information.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /></p><p><img src="/insertField.field?id=95&amp;nmode=0&amp;name=Payment+Cart.Begin+Section&amp;type=6" title="Begins payment cart content" data-runat="server" data-fieldid="95" data-attribid="0" data-searchable="0" data-fieldname="Payment Cart.Begin Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />This membership of <img src="/insertField.field?id=96&amp;nmode=0&amp;name=Gift+Amount&amp;type=6" title="Amount given for this gift" data-runat="server" data-fieldid="96" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /> is part of your <img src="/insertField.field?id=97&amp;nmode=0&amp;name=Cart+Amount&amp;type=6" title="Total amount given for this payment cart" data-runat="server" data-fieldid="97" data-attribid="0" data-searchable="0" data-fieldname="Cart Amount" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /> transaction on <img src="/insertField.field?id=98&amp;nmode=0&amp;name=Cart+Date&amp;type=6" title="Date of payment cart transaction" data-runat="server" data-fieldid="98" data-attribid="0" data-searchable="0" data-fieldname="Cart Date" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />. You may receive multiple notifications, but your credit card was only charged once for <img src="/insertField.field?id=97&amp;nmode=0&amp;name=Cart+Amount&amp;type=6" title="Total amount given for this payment cart" data-runat="server" data-fieldid="97" data-attribid="0" data-searchable="0" data-fieldname="Cart Amount" data-fieldtype="6" data-htmlencode="True" data-isloop="False" />.<img src="/insertField.field?id=99&amp;nmode=0&amp;name=Payment+Cart.End+Section&amp;type=6" title="Ends payment cart content" data-runat="server" data-fieldid="99" data-attribid="0" data-searchable="0" data-fieldname="Payment Cart.End Section" data-fieldtype="6" data-htmlencode="True" data-isloop="False" /></p><p>On behalf of our entire organization, thank you again for your support!</p></div><div id="eventContent" class="hide eventReg"><p><img src="/insertField.field?id=76&amp;nmode=0&amp;name=Organization+Donor.Begin+Section&amp;type=5" style="cursor:move" title="Begins organization content" data-runat="server" data-fieldid="76" data-attribid="0" data-searchable="0" data-fieldname="Organization Donor.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />Thank you for registering on behalf of <img src="/insertField.field?id=62&amp;nmode=0&amp;name=Organization+Name&amp;type=5" style="cursor:move" title="Organization name" data-runat="server" data-fieldid="62" data-attribid="0" data-searchable="0" data-fieldname="Organization Name" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />.</p><p><img src="/insertField.field?id=77&amp;nmode=0&amp;name=Organization+Donor.End+Section&amp;type=5" style="cursor:move" title="Ends organization content" data-runat="server" data-fieldid="77" data-attribid="0" data-searchable="0" data-fieldname="Organization Donor.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=74&amp;nmode=0&amp;name=Individual+Donor.Begin+Section&amp;type=5" style="cursor:move" title="Begins individual content" data-runat="server" data-fieldid="74" data-attribid="0" data-searchable="0" data-fieldname="Individual Donor.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />Dear <img src="/insertField.field?id=3&amp;nmode=0&amp;name=First+Name&amp;type=5" style="cursor:move" title="Individual first name" data-runat="server" data-fieldid="3" data-attribid="0" data-searchable="0" data-fieldname="First Name" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />,</p><p>Thank you for registering!<img src="/insertField.field?id=75&amp;nmode=0&amp;name=Individual+Donor.End+Section&amp;type=5" style="cursor:move" title="Ends individual content" data-runat="server" data-fieldid="75" data-attribid="0" data-searchable="0" data-fieldname="Individual Donor.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />&nbsp; The advancements we have made can be attributed in many ways to people like you who have generously supported our mission.</p><p>Please print and keep this letter as a confirmation of your registration.</p><p>The following information was recorded for your registration:&nbsp;</p><p>&nbsp;<img src="/insertField.field?id=24&amp;name=Event+Item+Loop.Begin+Section&amp;type=5&amp;nmode=1" data-runat="server" data-fieldid="24" data-attribid="0" data-searchable="0" data-fieldname="Event Item Loop.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="True" data-counterfid="35" /><img src="/insertField.field?id=25&amp;name=Event+Item+Name&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="25" data-attribid="0" data-searchable="0" data-fieldname="Event Item Name" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=26&amp;name=Pricing+Loop.Begin+Section&amp;type=5&amp;nmode=1" data-runat="server" data-fieldid="26" data-attribid="0" data-searchable="0" data-fieldname="Pricing Loop.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="True" data-counterfid="34" /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/insertField.field?id=27&amp;name=Pricing+Description&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="27" data-attribid="0" data-searchable="0" data-fieldname="Pricing Description" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=29&amp;name=Attendee+Loop.Begin+Section&amp;type=5&amp;nmode=1" data-runat="server" data-fieldid="29" data-attribid="0" data-searchable="0" data-fieldname="Attendee Loop.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="True" data-counterfid="33" /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/insertField.field?id=30&amp;name=Attendee+Name&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="30" data-attribid="0" data-searchable="0" data-fieldname="Attendee Name" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=33&amp;name=Attendee+Loop.End+Section&amp;type=5&amp;nmode=1" data-runat="server" data-fieldid="33" data-attribid="0" data-searchable="0" data-fieldname="Attendee Loop.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="True" data-counterfid="29" /><br /><img src="/insertField.field?id=34&amp;name=Pricing+Loop.End+Section&amp;type=5&amp;nmode=1" data-runat="server" data-fieldid="34" data-attribid="0" data-searchable="0" data-fieldname="Pricing Loop.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="True" data-counterfid="26" /><br /><img src="/insertField.field?id=35&amp;name=Event+Item+Loop.End+Section&amp;type=5&amp;nmode=1" data-runat="server" data-fieldid="35" data-attribid="0" data-searchable="0" data-fieldname="Event Item Loop.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="True" data-counterfid="24" /></p><p><img src="/insertField.field?id=36&amp;name=Credit+Card.Begin+Section&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="36" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><br />Total Amount: <img src="/insertField.field?id=12&amp;name=Gift+Amount&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="12" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><br />Payment Method:&nbsp;<img src="/insertField.field?id=15&amp;name=Card+Type&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="15" data-attribid="0" data-searchable="0" data-fieldname="Card Type" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /> (<img src="/insertField.field?id=18&amp;name=Card+Number&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="18" data-attribid="0" data-searchable="0" data-fieldname="Card Number" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />) <img src="/insertField.field?id=37&amp;name=Credit+Card.End+Section&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="37" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><br />Date: <img src="/insertField.field?id=13&amp;name=Gift+Date&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="13" data-attribid="0" data-searchable="0" data-fieldname="Gift Date" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=47&amp;nmode=0&amp;name=Additional+Donation.Begin+Section&amp;type=5" style="cursor:move" title="Begin additional donation content" data-runat="server" data-fieldid="47" data-attribid="0" data-searchable="0" data-fieldname="Additional Donation.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /></p><p>We would also like to thank you for your additional donation of <img src="/insertField.field?id=48&amp;nmode=0&amp;name=Amount&amp;type=5" style="cursor:move" title="Amount of additional donation" data-runat="server" data-fieldid="48" data-attribid="0" data-searchable="0" data-fieldname="Amount" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />.<img src="/insertField.field?id=49&amp;nmode=0&amp;name=Additional+Donation.End+Section&amp;type=5" style="cursor:move" title="End additional donation content" data-runat="server" data-fieldid="49" data-attribid="0" data-searchable="0" data-fieldname="Additional Donation.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /></p><p>On&nbsp;behalf of&nbsp;our entire organization, thank you again&nbsp;for registering, and we look forward to seeing you at the event!<br />&nbsp;</p></div><div id="eventClassicContent" class="hide eventRegClassic"><p>Dear <img src="/insertField.field?id=3&amp;name=First+Name&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="3" data-attribid="0" data-searchable="0" data-fieldname="First Name" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />,</p><p>Thank you for registering!<img src="/insertField.field?id=47&amp;nmode=0&amp;name=Additional+Donation.Begin+Section&amp;type=5" style="cursor:move" title="Begin additional donation content" data-runat="server" data-fieldid="47" data-attribid="0" data-searchable="0" data-fieldname="Additional Donation.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />&nbsp; Thank you as well for your generous additional donation of <img src="/insertField.field?id=48&amp;nmode=0&amp;name=Amount&amp;type=5" style="cursor:move" title="Amount of additional donation" data-runat="server" data-fieldid="48" data-attribid="0" data-searchable="0" data-fieldname="Amount" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />.<img src="/insertField.field?id=49&amp;nmode=0&amp;name=Additional+Donation.End+Section&amp;type=5" style="cursor:move" title="End additional donation content" data-runat="server" data-fieldid="49" data-attribid="0" data-searchable="0" data-fieldname="Additional Donation.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />&nbsp; The advancements we have made can be attributed in many ways to people like you who have generously supported our mission.</p><p>Please print and keep this letter as a confirmation of your registration.</p><p>The following information was recorded for your registration:&nbsp;</p><p>&nbsp;<img src="/insertField.field?id=24&amp;name=Event+Item+Loop.Begin+Section&amp;type=5&amp;nmode=1" data-runat="server" data-fieldid="24" data-attribid="0" data-searchable="0" data-fieldname="Event Item Loop.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="True" data-counterfid="35" /><img src="/insertField.field?id=25&amp;name=Event+Item+Name&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="25" data-attribid="0" data-searchable="0" data-fieldname="Event Item Name" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=26&amp;name=Pricing+Loop.Begin+Section&amp;type=5&amp;nmode=1" data-runat="server" data-fieldid="26" data-attribid="0" data-searchable="0" data-fieldname="Pricing Loop.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="True" data-counterfid="34" /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/insertField.field?id=27&amp;name=Pricing+Description&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="27" data-attribid="0" data-searchable="0" data-fieldname="Pricing Description" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=29&amp;name=Attendee+Loop.Begin+Section&amp;type=5&amp;nmode=1" data-runat="server" data-fieldid="29" data-attribid="0" data-searchable="0" data-fieldname="Attendee Loop.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="True" data-counterfid="33" /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/insertField.field?id=30&amp;name=Attendee+Name&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="30" data-attribid="0" data-searchable="0" data-fieldname="Attendee Name" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=33&amp;name=Attendee+Loop.End+Section&amp;type=5&amp;nmode=1" data-runat="server" data-fieldid="33" data-attribid="0" data-searchable="0" data-fieldname="Attendee Loop.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="True" data-counterfid="29" /><br /><img src="/insertField.field?id=34&amp;name=Pricing+Loop.End+Section&amp;type=5&amp;nmode=1" data-runat="server" data-fieldid="34" data-attribid="0" data-searchable="0" data-fieldname="Pricing Loop.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="True" data-counterfid="26" /><br /><img src="/insertField.field?id=35&amp;name=Event+Item+Loop.End+Section&amp;type=5&amp;nmode=1" data-runat="server" data-fieldid="35" data-attribid="0" data-searchable="0" data-fieldname="Event Item Loop.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="True" data-counterfid="24" /></p><p><img src="/insertField.field?id=36&amp;name=Credit+Card.Begin+Section&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="36" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><br />Total Amount: <img src="/insertField.field?id=12&amp;name=Gift+Amount&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="12" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><br />Payment Method:&nbsp;<img src="/insertField.field?id=15&amp;name=Card+Type&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="15" data-attribid="0" data-searchable="0" data-fieldname="Card Type" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=40&amp;name=Payment+Method&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="40" data-attribid="0" data-searchable="0" data-fieldname="Payment Method" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />&nbsp;(<img src="/insertField.field?id=18&amp;name=Card+Number&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="18" data-attribid="0" data-searchable="0" data-fieldname="Card Number" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />) <img src="/insertField.field?id=37&amp;name=Credit+Card.End+Section&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="37" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=38&amp;name=Pledge.Begin+Section&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="38" data-attribid="0" data-searchable="0" data-fieldname="Pledge.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><br />Total Pledge Amount: <img src="/insertField.field?id=12&amp;name=Gift+Amount&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="12" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=39&amp;name=Pledge.End+Section&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="39" data-attribid="0" data-searchable="0" data-fieldname="Pledge.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /><br />Date: <img src="/insertField.field?id=13&amp;name=Gift+Date&amp;type=5&amp;nmode=0" data-runat="server" data-fieldid="13" data-attribid="0" data-searchable="0" data-fieldname="Gift Date" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /></p><p><img src="/insertField.field?id=41&amp;nmode=0&amp;name=Payment+Cart.Begin+Section&amp;type=5" title="Begins payment cart content" data-runat="server" data-fieldid="41" data-attribid="0" data-searchable="0" data-fieldname="Payment Cart.Begin Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />This event registration of <img src="/insertField.field?id=42&amp;nmode=0&amp;name=Gift+Amount&amp;type=5" title="Amount given for this gift" data-runat="server" data-fieldid="42" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /> is part of your <img src="/insertField.field?id=43&amp;nmode=0&amp;name=Cart+Amount&amp;type=5" title="Total amount given for this payment cart" data-runat="server" data-fieldid="43" data-attribid="0" data-searchable="0" data-fieldname="Cart Amount" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /> transaction on <img src="/insertField.field?id=44&amp;nmode=0&amp;name=Cart+Date&amp;type=5" title="Date of payment cart transaction" data-runat="server" data-fieldid="44" data-attribid="0" data-searchable="0" data-fieldname="Cart Date" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />. You may receive multiple notifications, but your credit card was only charged once for <img src="/insertField.field?id=43&amp;nmode=0&amp;name=Cart+Amount&amp;type=5" title="Total amount given for this payment cart" data-runat="server" data-fieldid="43" data-attribid="0" data-searchable="0" data-fieldname="Cart Amount" data-fieldtype="5" data-htmlencode="True" data-isloop="False" />.<img src="/insertField.field?id=45&amp;nmode=0&amp;name=Payment+Cart.End+Section&amp;type=5" title="Ends payment cart content" data-runat="server" data-fieldid="45" data-attribid="0" data-searchable="0" data-fieldname="Payment Cart.End Section" data-fieldtype="5" data-htmlencode="True" data-isloop="False" /></p><p>On&nbsp;behalf of&nbsp;our entire organization, thank you again&nbsp;for registering, and we look forward to seeing you at the event!<br />&nbsp;</p></div><div id="volunteerContent" class="hide volunteer"><p>Dear&nbsp;<img alt="" src="/insertField.field?id=2&amp;name=First+Name&amp;type=17&amp;nmode=0" data-runat="server" data-fieldid="2" data-attribid="0" data-searchable="0" data-isloop="False" data-htmlencode="True" data-fieldtype="17" data-fieldname="First Name" />,</p><p>Thank you for showing interest in volunteering with our organization. We are grateful for your generosity and hope that you will take great pride in the important difference that volunteering makes.<br /> <br /> The details about the volunteer opportunity that you showed interest in are below:</p><blockquote style="margin-right:0" dir="ltr"><p style="margin-right:0" dir="ltr">Position:&nbsp; <img alt="" src="/insertField.field?id=12&amp;name=Position&amp;type=17&amp;nmode=0" data-runat="server" data-fieldid="12" data-attribid="0" data-searchable="0" data-isloop="False" data-htmlencode="True" data-fieldtype="17" data-fieldname="Position " /><br /> Description:&nbsp; <img alt="" src="/insertField.field?id=6&amp;name=Description&amp;type=17&amp;nmode=0" data-runat="server" data-fieldid="6" data-attribid="0" data-searchable="0" data-isloop="False" data-htmlencode="True" data-fieldtype="17" data-fieldname="Description " /><br /> Minimum Age:&nbsp; <img alt="" src="/insertField.field?id=9&amp;name=Minimum+Age&amp;type=17&amp;nmode=0" data-runat="server" data-fieldid="9" data-attribid="0" data-searchable="0" data-isloop="False" data-htmlencode="True" data-fieldtype="17" data-fieldname="Minimum Age" /></p></blockquote><p style="margin-right:0" dir="ltr">On behalf of the entire organization, thank you again for volunteering.</p></div><div id="paymentContent" class="hide payment"><p>Dear <img src="/insertField.field?id=708&amp;nmode=0&amp;name=First+Name&amp;type=350" data-runat="server" data-fieldid="708" data-attribid="0" data-searchable="0" data-fieldname="First Name" data-fieldtype="350" data-htmlencode="True" data-isloop="False" />,</p><p>Thank you&nbsp;supporting&nbsp;our organization. The advancements we have made can be attributed in many ways to people like you who have generously supported our mission. We are grateful for your generosity and hope that you will take great pride in the important difference that your contributions makes.</p><p>Below is a summary of the transaction for your reference:</p><p><img src="/insertField.field?id=513&amp;nmode=0&amp;name=Donation.Begin+Section&amp;type=350" data-runat="server" data-fieldid="513" data-attribid="0" data-searchable="0" data-fieldname="Donation.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><strong>Gift Information:</strong><img src="/insertField.field?id=515&amp;nmode=1&amp;name=Donation+Begin+Loop&amp;type=350" title="Begins donation content loop" data-runat="server" data-fieldid="515" data-attribid="0" data-searchable="0" data-fieldname="Donation Begin Loop" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="516" /></p><p><strong>Amount:</strong> <img src="/insertField.field?id=517&amp;nmode=0&amp;name=Gift+Amount&amp;type=350" data-runat="server" data-fieldid="517" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Designation: </strong><img src="/insertField.field?id=519&amp;nmode=0&amp;name=Designation&amp;type=350" data-runat="server" data-fieldid="519" data-attribid="0" data-searchable="0" data-fieldname="Designation" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=529&amp;nmode=0&amp;name=Recurring+Information.Begin+Section&amp;type=350" title="Begins recurring gift content" data-runat="server" data-fieldid="529" data-attribid="0" data-searchable="0" data-fieldname="Recurring Information.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Frequency: </strong><img src="/insertField.field?id=533&amp;nmode=0&amp;name=Frequency&amp;type=350" title="Recurring gift frequency" data-runat="server" data-fieldid="533" data-attribid="0" data-searchable="0" data-fieldname="Frequency" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Starting On: </strong><img src="/insertField.field?id=534&amp;nmode=0&amp;name=Starting+Date&amp;type=350" title="Recurring gift start date" data-runat="server" data-fieldid="534" data-attribid="0" data-searchable="0" data-fieldname="Starting Date" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=531&amp;nmode=0&amp;name=Recurring+Information+End+Date+Begin+Section&amp;type=350" title="Begins gift end date content" data-runat="server" data-fieldid="531" data-attribid="0" data-searchable="0" data-fieldname="Recurring Information End Date Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Ending On: </strong><img src="/insertField.field?id=535&amp;nmode=0&amp;name=Ending+Date&amp;type=350" title="Recurring gift end date" data-runat="server" data-fieldid="535" data-attribid="0" data-searchable="0" data-fieldname="Ending Date" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=532&amp;nmode=0&amp;name=Recurring+Information+End+Date+End+Section&amp;type=350" title="Ends gift end date content" data-runat="server" data-fieldid="532" data-attribid="0" data-searchable="0" data-fieldname="Recurring Information End Date End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=530&amp;nmode=0&amp;name=Recurring+Information.End+Section&amp;type=350" title="Ends recurring gift content" data-runat="server" data-fieldid="530" data-attribid="0" data-searchable="0" data-fieldname="Recurring Information.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=536&amp;nmode=0&amp;name=Installment+Schedule.Begin+Section&amp;type=350" title="Begins installment schedule content" data-runat="server" data-fieldid="536" data-attribid="0" data-searchable="0" data-fieldname="Installment Schedule.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Number of Installments: </strong><img src="/insertField.field?id=537&amp;nmode=0&amp;name=Number+Of+Installments&amp;type=350" title="Number of installment payments" data-runat="server" data-fieldid="537" data-attribid="0" data-searchable="0" data-fieldname="Number Of Installments" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Amount of each Installment: </strong><img src="/insertField.field?id=538&amp;nmode=0&amp;name=First+Installment+Amount&amp;type=350" title="Amount of the first installment payment" data-runat="server" data-fieldid="538" data-attribid="0" data-searchable="0" data-fieldname="First Installment Amount" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Frequency: </strong><img src="/insertField.field?id=539&amp;nmode=0&amp;name=Frequency&amp;type=350" title="Installment gift frequency" data-runat="server" data-fieldid="539" data-attribid="0" data-searchable="0" data-fieldname="Frequency" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Starting On: </strong><img src="/insertField.field?id=540&amp;nmode=0&amp;name=Starting+Date&amp;type=350" title="Date of first installment" data-runat="server" data-fieldid="540" data-attribid="0" data-searchable="0" data-fieldname="Starting Date" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Ending On: </strong><img src="/insertField.field?id=541&amp;nmode=0&amp;name=Ending+Date&amp;type=350" title="Date of last installment" data-runat="server" data-fieldid="541" data-attribid="0" data-searchable="0" data-fieldname="Ending Date" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=542&amp;nmode=0&amp;name=Installment+Schedule.End+Section&amp;type=350" title="Ends installment schedule content" data-runat="server" data-fieldid="542" data-attribid="0" data-searchable="0" data-fieldname="Installment Schedule.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=551&amp;nmode=0&amp;name=Tribute.Begin+Section&amp;type=350" title="Begins tribute content" data-runat="server" data-fieldid="551" data-attribid="0" data-searchable="0" data-fieldname="Tribute.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /></p><p>You have made this gift <img src="/insertField.field?id=555&amp;nmode=0&amp;name=Type&amp;type=350" title="Type of tribute gift selected" data-runat="server" data-fieldid="555" data-attribid="0" data-searchable="0" data-fieldname="Type" data-fieldtype="350" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=556&amp;nmode=0&amp;name=Full+Name&amp;type=350" title="Full name of the tribute" data-runat="server" data-fieldid="556" data-attribid="0" data-searchable="0" data-fieldname="Full Name" data-fieldtype="350" data-htmlencode="True" data-isloop="False" />. <img src="/insertField.field?id=553&amp;nmode=0&amp;name=Acknowledgee.Begin+Section&amp;type=350" title="Begins acknowledgee content" data-runat="server" data-fieldid="553" data-attribid="0" data-searchable="0" data-fieldname="Acknowledgee.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /> A letter will be sent on your behalf to <img src="/insertField.field?id=558&amp;nmode=0&amp;name=Full+Name&amp;type=350" title="Constituent full name" data-runat="server" data-fieldid="558" data-attribid="0" data-searchable="0" data-fieldname="Full Name" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /> at the following address: <img src="/insertField.field?id=569&amp;nmode=0&amp;name=Formatted+Address&amp;type=350" title="Constituent address, formatted as one line" data-runat="server" data-fieldid="569" data-attribid="0" data-searchable="0" data-fieldname="Formatted Address" data-fieldtype="350" data-htmlencode="True" data-isloop="False" />.<img src="/insertField.field?id=554&amp;nmode=0&amp;name=Acknowledgee.End+Section&amp;type=350" title="Ends acknowledgee content" data-runat="server" data-fieldid="554" data-attribid="0" data-searchable="0" data-fieldname="Acknowledgee.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=552&amp;nmode=0&amp;name=Tribute.End+Section&amp;type=350" title="Ends tribute content" data-runat="server" data-fieldid="552" data-attribid="0" data-searchable="0" data-fieldname="Tribute.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=549&amp;nmode=0&amp;name=Anonymous+Begin+Section&amp;type=350" data-runat="server" data-fieldid="549" data-attribid="0" data-searchable="0" data-fieldname="Anonymous Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /> As you requested, this gift will remain anonymous.<img src="/insertField.field?id=550&amp;nmode=0&amp;name=Anonymous+End+Section&amp;type=350" data-runat="server" data-fieldid="550" data-attribid="0" data-searchable="0" data-fieldname="Anonymous End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /> <img src="/insertField.field?id=524&amp;nmode=0&amp;name=eReciept.Begin+Section&amp;type=350" title="Begins eReceipt content" data-runat="server" data-fieldid="524" data-attribid="0" data-searchable="0" data-fieldname="eReciept.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /> You can also access a receipt online by clicking on this link: <img src="/insertField.field?id=528&amp;nmode=0&amp;name=eReceipt+Download+URL&amp;type=350" title="Link to view the transaction eReceipt" data-runat="server" data-fieldid="528" data-attribid="0" data-searchable="0" data-fieldname="eReceipt Download URL" data-fieldtype="350" data-htmlencode="False" data-isloop="False" /><img src="/insertField.field?id=525&amp;nmode=0&amp;name=eReciept.End+Section&amp;type=350" title="Ends eReceipt content" data-runat="server" data-fieldid="525" data-attribid="0" data-searchable="0" data-fieldname="eReciept.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=516&amp;nmode=1&amp;name=Donation+End+Loop&amp;type=350" title="Ends donation content loop" data-runat="server" data-fieldid="516" data-attribid="0" data-searchable="0" data-fieldname="Donation End Loop" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="515" /><img src="/insertField.field?id=514&amp;nmode=0&amp;name=Donation.End+Section&amp;type=350" data-runat="server" data-fieldid="514" data-attribid="0" data-searchable="0" data-fieldname="Donation.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /></p><p><img src="/insertField.field?id=574&amp;nmode=0&amp;name=Membership.Begin+Section&amp;type=350" data-runat="server" data-fieldid="574" data-attribid="0" data-searchable="0" data-fieldname="Membership.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><strong>Membership Information:</strong><img src="/insertField.field?id=576&amp;nmode=1&amp;name=Membership+Loop.Begin+Section&amp;type=350" title="Begins membership content loop" data-runat="server" data-fieldid="576" data-attribid="0" data-searchable="0" data-fieldname="Membership Loop.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="577" /></p><p><strong>Membership: </strong><img src="/insertField.field?id=584&amp;nmode=0&amp;name=Category&amp;type=350" title="Membership category" data-runat="server" data-fieldid="584" data-attribid="0" data-searchable="0" data-fieldname="Category" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=592&amp;nmode=0&amp;name=Benefits.Begin+Section&amp;type=350" title="Begin benefits content" data-runat="server" data-fieldid="592" data-attribid="0" data-searchable="0" data-fieldname="Benefits.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Benefits: </strong><img src="/insertField.field?id=587&amp;nmode=0&amp;name=Benefits&amp;type=350" title="Benefits of membership" data-runat="server" data-fieldid="587" data-attribid="0" data-searchable="0" data-fieldname="Benefits" data-fieldtype="350" data-htmlencode="False" data-isloop="False" /><img src="/insertField.field?id=593&amp;nmode=0&amp;name=Benefits.End+Section&amp;type=350" title="End benefits content" data-runat="server" data-fieldid="593" data-attribid="0" data-searchable="0" data-fieldname="Benefits.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=594&amp;nmode=0&amp;name=Waive+Benefits.Begin+Section&amp;type=350" title="Begin waive benefits content" data-runat="server" data-fieldid="594" data-attribid="0" data-searchable="0" data-fieldname="Waive Benefits.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br />You have indicated that you wish to waive the benefits of this membership.<img src="/insertField.field?id=595&amp;nmode=0&amp;name=Waive+Benefits.End+Section&amp;type=350" title="End waive benefits content" data-runat="server" data-fieldid="595" data-attribid="0" data-searchable="0" data-fieldname="Waive Benefits.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=596&amp;nmode=0&amp;name=Gift+of+Membership.Begin+Section&amp;type=350" title="Begin gift of membership content" data-runat="server" data-fieldid="596" data-attribid="0" data-searchable="0" data-fieldname="Gift of Membership.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /> This membership is a gift for <img src="/insertField.field?id=598&amp;nmode=0&amp;name=First+Name&amp;type=350" title="Constituent first name" data-runat="server" data-fieldid="598" data-attribid="0" data-searchable="0" data-fieldname="First Name" data-fieldtype="350" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=599&amp;nmode=0&amp;name=Last+Name&amp;type=350" title="Constituent last name" data-runat="server" data-fieldid="599" data-attribid="0" data-searchable="0" data-fieldname="Last Name" data-fieldtype="350" data-htmlencode="True" data-isloop="False" />.<img src="/insertField.field?id=610&amp;nmode=0&amp;name=Gift+of+Membership.End+Section&amp;type=350" title="End gift of membership content" data-runat="server" data-fieldid="610" data-attribid="0" data-searchable="0" data-fieldname="Gift of Membership.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=634&amp;nmode=0&amp;name=Cards.Begin+Section&amp;type=350" title="Begin membership card content" data-runat="server" data-fieldid="634" data-attribid="0" data-searchable="0" data-fieldname="Cards.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br />The name on the membership card will be: <img src="/insertField.field?id=628&amp;nmode=0&amp;name=Primary+Name&amp;type=350" title="Primary name of member" data-runat="server" data-fieldid="628" data-attribid="0" data-searchable="0" data-fieldname="Primary Name" data-fieldtype="350" data-htmlencode="True" data-isloop="False" />. <img src="/insertField.field?id=636&amp;nmode=0&amp;name=Addtional+Members.Begin+Section&amp;type=350" title="Begin additional member content" data-runat="server" data-fieldid="636" data-attribid="0" data-searchable="0" data-fieldname="Addtional Members.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" />The following people will be included in this membership: <img src="/insertField.field?id=85&amp;nmode=1&amp;name=Additional+Member+Begin+Loop&amp;type=350" title="Additional member content loop" data-runat="server" data-fieldid="85" data-attribid="0" data-searchable="0" data-fieldname="Additional Member Begin Loop" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="90" /><img src="/insertField.field?id=630&amp;nmode=0&amp;name=Additional+Name&amp;type=350" title="Name of additional member" data-runat="server" data-fieldid="630" data-attribid="0" data-searchable="0" data-fieldname="Additional Name" data-fieldtype="350" data-htmlencode="True" data-isloop="False" />, <img src="/insertField.field?id=90&amp;nmode=1&amp;name=Additional+Member+End+Loop&amp;type=350" style="cursor:move" title="Additional member content loop" data-runat="server" data-fieldid="90" data-attribid="0" data-searchable="0" data-fieldname="Additional Member End Loop" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="85" /><img src="/insertField.field?id=637&amp;nmode=0&amp;name=Addtional+Members.End+Section&amp;type=350" title="End additional member content" data-runat="server" data-fieldid="637" data-attribid="0" data-searchable="0" data-fieldname="Addtional Members.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=635&amp;nmode=0&amp;name=Cards.End+Section&amp;type=350" title="End membership card content" data-runat="server" data-fieldid="635" data-attribid="0" data-searchable="0" data-fieldname="Cards.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=615&amp;nmode=0&amp;name=Free+Membership.Begin+Section&amp;type=350" title="Begin free membership content" data-runat="server" data-fieldid="615" data-attribid="0" data-searchable="0" data-fieldname="Free Membership.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" />This is a free membership - no dues are required.<img src="/insertField.field?id=616&amp;nmode=0&amp;name=Free+Membership.End+Section&amp;type=350" title="End free membership content" data-runat="server" data-fieldid="616" data-attribid="0" data-searchable="0" data-fieldname="Free Membership.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=617&amp;nmode=0&amp;name=Paid+Membership.Begin+Section&amp;type=350" title="Begin paid membership content" data-runat="server" data-fieldid="617" data-attribid="0" data-searchable="0" data-fieldname="Paid Membership.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /> Dues for this membership are: <img src="/insertField.field?id=586&amp;nmode=0&amp;name=Amount&amp;type=350" title="Amount paid for membership" data-runat="server" data-fieldid="586" data-attribid="0" data-searchable="0" data-fieldname="Amount" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=618&amp;nmode=0&amp;name=Paid+Membership.End+Section&amp;type=350" title="End paid membership content" data-runat="server" data-fieldid="618" data-attribid="0" data-searchable="0" data-fieldname="Paid Membership.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><img src="/insertField.field?id=581&amp;nmode=0&amp;name=Additional+Donation.Begin+Section&amp;type=350" title="Begin additional donation content" data-runat="server" data-fieldid="581" data-attribid="0" data-searchable="0" data-fieldname="Additional Donation.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /> The additional gift you gave is: <img src="/insertField.field?id=582&amp;nmode=0&amp;name=Amount&amp;type=350" title="Extra donation amount" data-runat="server" data-fieldid="582" data-attribid="0" data-searchable="0" data-fieldname="Amount" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=583&amp;nmode=0&amp;name=Additional+Donation.End+Section&amp;type=350" title="End additional donation content" data-runat="server" data-fieldid="583" data-attribid="0" data-searchable="0" data-fieldname="Additional Donation.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><strong><strong><br /></strong>Total Amount: </strong><img src="/insertField.field?id=578&amp;nmode=0&amp;name=Gift+Amount&amp;type=350" title="Gift amount given" data-runat="server" data-fieldid="578" data-attribid="0" data-searchable="0" data-fieldname="Gift Amount" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=577&amp;nmode=1&amp;name=Membership+Loop.End+Section&amp;type=350" title="Ends membership content loop" data-runat="server" data-fieldid="577" data-attribid="0" data-searchable="0" data-fieldname="Membership Loop.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="576" /><img src="/insertField.field?id=575&amp;nmode=0&amp;name=Membership.End+Section&amp;type=350" data-runat="server" data-fieldid="575" data-attribid="0" data-searchable="0" data-fieldname="Membership.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /></p><p><img src="/insertField.field?id=500&amp;nmode=0&amp;name=Event.Begin+Section&amp;type=350" data-runat="server" data-fieldid="500" data-attribid="0" data-searchable="0" data-fieldname="Event.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /> <strong>Event Information:</strong></p><p><img src="/insertField.field?id=502&amp;nmode=1&amp;name=Event+Loop.Begin+Section&amp;type=350" title="Begins event registration content loop" data-runat="server" data-fieldid="502" data-attribid="0" data-searchable="0" data-fieldname="Event Loop.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="503" /> <img src="/insertField.field?id=24&amp;nmode=1&amp;name=Event+Item+Loop.Begin+Section&amp;type=350" title="Begins event content loop" data-runat="server" data-fieldid="24" data-attribid="0" data-searchable="0" data-fieldname="Event Item Loop.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="35" /> <strong><img src="/insertField.field?id=507&amp;nmode=0&amp;name=Event+Item+Name&amp;type=350" title="Name of event" data-runat="server" data-fieldid="507" data-attribid="0" data-searchable="0" data-fieldname="Event Item Name" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /> </strong><img src="/insertField.field?id=26&amp;nmode=1&amp;name=Pricing+Loop.Begin+Section&amp;type=350" title="Begins pricing content loop" data-runat="server" data-fieldid="26" data-attribid="0" data-searchable="0" data-fieldname="Pricing Loop.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="34" /> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="/insertField.field?id=508&amp;nmode=0&amp;name=Pricing+Description&amp;type=350" title="Event pricing description" data-runat="server" data-fieldid="508" data-attribid="0" data-searchable="0" data-fieldname="Pricing Description" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /> <img src="/insertField.field?id=29&amp;nmode=1&amp;name=Attendee+Loop.Begin+Section&amp;type=350" title="Begins attendee content loop" data-runat="server" data-fieldid="29" data-attribid="0" data-searchable="0" data-fieldname="Attendee Loop.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="33" /> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="/insertField.field?id=510&amp;nmode=0&amp;name=Attendee+Name&amp;type=350" title="Name of attendee" data-runat="server" data-fieldid="510" data-attribid="0" data-searchable="0" data-fieldname="Attendee Name" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /> <img src="/insertField.field?id=33&amp;nmode=1&amp;name=Attendee+Loop.End+Section&amp;type=350" title="Ends attendee content loop" data-runat="server" data-fieldid="33" data-attribid="0" data-searchable="0" data-fieldname="Attendee Loop.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="29" /> <br /><img src="/insertField.field?id=34&amp;nmode=1&amp;name=Pricing+Loop.End+Section&amp;type=350" title="Ends pricing content loop" data-runat="server" data-fieldid="34" data-attribid="0" data-searchable="0" data-fieldname="Pricing Loop.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="26" /> <br /><img src="/insertField.field?id=35&amp;nmode=1&amp;name=Event+Item+Loop.End+Section&amp;type=350" title="Ends event content loop" data-runat="server" data-fieldid="35" data-attribid="0" data-searchable="0" data-fieldname="Event Item Loop.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="24" /> <img src="/insertField.field?id=503&amp;nmode=1&amp;name=Event+Loop.End+Section&amp;type=350" title="Ends event registration content loop" data-runat="server" data-fieldid="503" data-attribid="0" data-searchable="0" data-fieldname="Event Loop.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="True" data-counterfid="502" /> <img src="/insertField.field?id=501&amp;nmode=0&amp;name=Event.End+Section&amp;type=350" data-runat="server" data-fieldid="501" data-attribid="0" data-searchable="0" data-fieldname="Event.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /></p><p><strong>Summary:</strong></p><p><strong>Total: </strong><img src="/insertField.field?id=681&amp;nmode=0&amp;name=Summary+Gift+Amount&amp;type=350" data-runat="server" data-fieldid="681" data-attribid="0" data-searchable="0" data-fieldname="Summary Gift Amount" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Date: </strong><img src="/insertField.field?id=682&amp;nmode=0&amp;name=Gift+Date&amp;type=350" data-runat="server" data-fieldid="682" data-attribid="0" data-searchable="0" data-fieldname="Gift Date" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=695&amp;nmode=0&amp;name=Credit+Card.Begin+Section&amp;type=350" data-runat="server" data-fieldid="695" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Payment Method: </strong><img src="/insertField.field?id=686&amp;nmode=0&amp;name=Card+Type&amp;type=350" data-runat="server" data-fieldid="686" data-attribid="0" data-searchable="0" data-fieldname="Card Type" data-fieldtype="350" data-htmlencode="True" data-isloop="False" />&nbsp;<img src="/insertField.field?id=683&amp;nmode=0&amp;name=Payment+Method&amp;type=350" data-runat="server" data-fieldid="683" data-attribid="0" data-searchable="0" data-fieldname="Payment Method" data-fieldtype="350" data-htmlencode="True" data-isloop="False" />, <img src="/insertField.field?id=684&amp;nmode=0&amp;name=Card+Number&amp;type=350" data-runat="server" data-fieldid="684" data-attribid="0" data-searchable="0" data-fieldname="Card Number" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=696&amp;nmode=0&amp;name=Credit+Card.End+Section&amp;type=350" data-runat="server" data-fieldid="696" data-attribid="0" data-searchable="0" data-fieldname="Credit Card.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><img src="/insertField.field?id=699&amp;nmode=0&amp;name=Pledge.Begin+Section&amp;type=350" data-runat="server" data-fieldid="699" data-attribid="0" data-searchable="0" data-fieldname="Pledge.Begin Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /><br /><strong>Payment Method:</strong> This is a pledge contribution.<img src="/insertField.field?id=700&amp;nmode=0&amp;name=Pledge.End+Section&amp;type=350" data-runat="server" data-fieldid="700" data-attribid="0" data-searchable="0" data-fieldname="Pledge.End Section" data-fieldtype="350" data-htmlencode="True" data-isloop="False" /></p><p>On behalf of our entire organization, thank you again for your generous contribution.</p></div></div>'

	},

	Methods: {
		
		init: function(type) {
			$.ajaxSetup({ async: false });
			$(document).ready(function() {
				var m = ThemeCaddy.Methods;
				m.checkEditView();
				m.showPartTitle();
				if (!ThemeCaddy.Config.isEditView) {
					if (type == "page") {
						m.initializeFiles();
						m.createToolInterface();
						m.initFontControls();
						m.hideStuff();
						setTimeout(function() {
							m.storeElementStyles();
							// Remove custom stylesheet so that we can overwrite things
							$('link[href*=".css?id=37"]').remove();
						},100);
						m.saveTab();
					} else if (type == "email") {
						m.initializeFiles();
						m.createEmailInterface();
						m.initEmailToolControls();
						m.initEmailHtmlPreview();
						m.initEmailHtmlViewer();
					}
				}
			});
		},
		
		checkEditView: function() {
			if (!ThemeCaddy.Config.isEditView) {
				ThemeCaddy.Config.isEditView = window.location.href.match('templatedesigner');
			}
		},
		
		initializeFiles: function() {
			// Append stylesheets and SOAP envelope to <head />
			// ------------------------------------------------
			
			var domain = document.domain;
			
			$("head").append('<link href="http://developer.guidecreative.com/scripts/SparkCaddy/v1/styles.css" rel="stylesheet" type="text/css" />')
					 .append('<link type="text/css" rel="stylesheet" href="http://'+domain+'/client/styles/jquery/smoothness/jquery-ui-1.7.1.all.css" />');
		},
		
		showPartTitle: function(){
			// Inform the user that Javascript code is present,
			// Must include "javascript" in the part title:
			if (ThemeCaddy.Config.isEditView) {
				if (!$('.jsPartLabel').length) {
					$('td[id$="tdPartName"]:contains("Theme Caddy")').each(function() {
						var uniqueID = $(this).attr("id");
						uniqueID = uniqueID.slice(0,uniqueID.length-11);
						var partName = $(this).html();
						var contentPane = $('div[id*="'+uniqueID+'_pnlPart"]');
						contentPane.append('<div class="jsPartLabel" style="padding:0 4px 0 24px;background:#000;color:#fff;font-size:11px;">'+partName+'</div>');
					});
				}
			}
		},
		
		
		// ------------
		//  PAGE TOOL:
		// ============
		
		createToolInterface: function() {
		
			// Create Tool Interface
			// ---------------------
			// Prep styles storage containers:
			var toolHtml = 	ThemeCaddy.Templates.tool
							.replace('${allHeadings}',ThemeCaddy.Elements.allHeadings)
							.replace('${h1}',ThemeCaddy.Elements.h1)
							.replace('${h2}',ThemeCaddy.Elements.h2)
							.replace('${h3}',ThemeCaddy.Elements.h3)
							.replace('${h4}',ThemeCaddy.Elements.h4)
							.replace('${text}',ThemeCaddy.Elements.text)
							.replace('${link}',ThemeCaddy.Elements.link)
							.replace('${linkHover}',ThemeCaddy.Elements.linkHover)
							.replace('${utilityNavLink}',ThemeCaddy.Elements.utilityNavLink)
							.replace('${mainNavLink}',ThemeCaddy.Elements.mainNavLink)
							.replace('${mainNavLinkHover}',ThemeCaddy.Elements.mainNavLinkHover)
							.replace('${mainNavBG}',ThemeCaddy.Elements.mainNavBG)
							.replace('${mainNavGradient}',ThemeCaddy.Elements.mainNavGradient)
							.replace('${mainNavBorder}',ThemeCaddy.Elements.mainNavBorder)
							.replace('${sideNavLink}',ThemeCaddy.Elements.sideNavLink)
							.replace('${sideNavLinkHover}',ThemeCaddy.Elements.sideNavLinkHover)
							.replace('${header1}',ThemeCaddy.Elements.header1)
							.replace('${footer1}',ThemeCaddy.Elements.footer1)
							.replace('${header2}',ThemeCaddy.Elements.header2)
							.replace('${donateButton}',ThemeCaddy.Elements.donateButton)
							.replace('${donateButtonText}',ThemeCaddy.Elements.donateButtonText)
							.replace('${donateButtonHover}',ThemeCaddy.Elements.donateButtonHover)
							.replace('${canvas2}',ThemeCaddy.Elements.canvas2)
							.replace('${footer2}',ThemeCaddy.Elements.footer2)
							.replace('${header3}',ThemeCaddy.Elements.header3)
							.replace('${titleBar}',ThemeCaddy.Elements.titleBar)
							.replace('${titleBarText}',ThemeCaddy.Elements.titleBarText)
							.replace('${canvas3}',ThemeCaddy.Elements.canvas3)
							.replace('${footer3}',ThemeCaddy.Elements.footer3);
							
			$(toolHtml).prependTo('body');

			$('#tabs3').tabs();
			
			// Add dummy selected states to menus as styling aids:
			$('li.last').each(function(){
				$(this).addClass('selected').addClass('hover').find('a').addClass('selected');
			});
			if ($('#donateButton').length) {
				$('#donateButton').append('<p><a class="hover" href="#">Button Hover</a></p>');
			}
			
			$(".fontList dt a").click(function() {
				var newdl = $(this).closest("dl");
				var newul = $(newdl).find("ul");
				$(newul).toggle();	
				return false;
			});
			
			// Template specific: 
			if ($('.one').length) {
				$('#theme1tools').css('display','block');
				$('#theme2tools').remove();
				$('#theme3tools').remove();
			} else if ($('.two').length) {
				$('#theme2tools').css('display','block');
				$('#theme1tools').remove();
				$('#theme3tools').remove();
			} else if ($('.three').length) {
				$('#theme3tools').css('display','block');
				$('#theme1tools').remove();
				$('#theme2tools').remove();
			}
			
			// Add style fixes for older installs:
			$('#contentPrimary a:contains("this")').after(' and the hover link will look like <a class="hover" href="#">this</a>');
			if ($('#headerBanner h1').length) {
				$('#headerBanner h1').addClass('title');
			}
		},
		
		initFontControls: function() {
			
			// Font family:
			// ------------
			$(".fontList dd ul li a").click(function() {
				var newdl = $(this).closest("dl");
					text = $(this).html(),
					targetfont = $(this).css("font-family"),
					newid = $(newdl).attr("elements"),
					newdta = $(newdl).find("dt a"),
					newul = $(newdl).find("ul");
				$(newdta).html(text);
				$(this).closest('.fontList').attr('styles',targetfont);
				$(newul).hide();
				ThemeCaddy.Methods.storeElementStyles($(this).closest('.elementWrap'));
				return false;
			}); 
			$("dl.fontList li a").click(function() {
				if ($(this).parents().hasClass("active")) // Not sure why this isn't bracketed [SB]
				var newdl = $(this).closest("dl");
				var newul = $(newdl).find("ul");
				$(newul).hide();
				return false;
			});
			
			
			// ==================================================
			
			
			// Font weight:
			// ------------
			$("button.bold").each(function() {
			
				// Preset:
				var elementToCheck = $(this).closest('.elementWrap').find('input.elements').val();
				if (typeof elementToCheck != "undefined") {
					if ($(elementToCheck.split(',')[0]).css('font-weight') == "bold" || $(elementToCheck.split(',')[0]).css('font-weight') == "700") {
						$(this).addClass('active');
					}
				}
			
				// Click:
				$(this).click(function() {
					var targid = $(this).closest("div").attr("elements");
					if ($(this).hasClass("active")) {
						$(this).removeClass('active');
					} else {
						$(this).addClass("active");
					}
					ThemeCaddy.Methods.storeElementStyles($(this).closest('.elementWrap'));
					return false;
				});
			});
			
			
			// Font style:
			// -----------
			$("button.italic").each(function() {
			
				// Preset:
				var elementToCheck = $(this).closest('.elementWrap').find('input.elements').val();
				if (typeof elementToCheck != "undefined") {
					if ($(elementToCheck.split(',')[0]).css('font-style') == "italic") {
						$(this).addClass('active');
					}
				}
			
				// Click:
				$(this).click(function() {
					var targid = $(this).closest("div").attr("elements");
					if ($(this).hasClass("active")) {
						$(this).removeClass('active');
					} else {
						$(this).addClass("active");
					}
					ThemeCaddy.Methods.storeElementStyles($(this).closest('.elementWrap'));
					return false;
				});
			});
			
			
			// Text decoration:
			// ----------------
			$("button.underline").each(function() {
				
				// Preset:
				var elementToCheck = $(this).closest('.elementWrap').find('input.elements').val();
				if (typeof elementToCheck != "undefined") {
					if ($(elementToCheck.split(',')[0]).css('text-decoration') == "underline") {
						$(this).addClass('active');
					}
				}
				
				// Click:
				$(this).click(function() {
					var targid = $(this).closest("div").attr("elements");
					if ($(this).hasClass("active")) {
						$(this).removeClass('active');
					} else {
						$(this).addClass("active");
					}
					ThemeCaddy.Methods.storeElementStyles($(this).closest('.elementWrap'));
					return false;
				});
			});
			
			
			// Text transform:
			// ---------------
			$("button.uppercase").each(function() {
				
				// Preset:
				var elementToCheck = $(this).closest('.elementWrap').find('input.elements').val();
				if (typeof elementToCheck != "undefined") {
					if ($(elementToCheck.split(',')[0]).css('text-transform') == "uppercase") {
						$(this).addClass('active');
					}
				}
				
				// Click: 
				$(this).click(function() {
					var targid = $(this).closest("div").attr("elements");
					if ($(this).hasClass("active")) {
						$(this).removeClass('active');
					} else {
						$(this).addClass("active");
					}
					ThemeCaddy.Methods.storeElementStyles($(this).closest('.elementWrap'));
					return false;
				});
			});
			
			
			// ==================================================
			
			
			// Font size:
			// ----------
			// Preset:
			$(".fontszr").each(function(){
				$(this).val(function(){
					var pardiv = $(this).closest("div");
					var newid = $(pardiv).attr("elements");
					var originalFontSize = $(newid).css("font-size");
					var currentFontSizeNum = parseFloat(originalFontSize, 10);
					return currentFontSizeNum+"px";
				});
			});
			
			// Increase Font Size:
			// -------------------
			$("button.fontszup").click(function() {
				var pardiv = $(this).closest("div"),
					parinput = $(pardiv).find("input"),
					newid = $(pardiv).attr("elements"),
					currentFontSize = $(newid).css("font-size"),
					currentFontSizeNum = parseFloat(currentFontSize, 10),
					newFontSize = currentFontSizeNum + 1;
				$(newid).css('font-size', newFontSize);
				$(parinput).val(newFontSize+"px");
				ThemeCaddy.Methods.storeElementStyles($(this).closest('.elementWrap'));
				return false;
			});
			
			// Decrease Font Size:
			// -------------------
			$("button.fontszdown").click(function(){
				var pardiv = $(this).closest("div"),
					parinput = $(pardiv).find("input"),
					newid = $(pardiv).attr("elements"),
					currentFontSize = $(newid).css("font-size"),
					currentFontSizeNum = parseFloat(currentFontSize, 10),
					newFontSize = currentFontSizeNum - 1;
				$(newid).css('font-size', newFontSize);
				$(parinput).val(newFontSize+"px");
				ThemeCaddy.Methods.storeElementStyles($(this).closest('.elementWrap'));
				return false;
			});
			
			
			// ==================================================
			
			
			// Font color:
			// -----------
			// Preset:
			$(".color").each(function(){
				var cssProperty = $(this).attr("cssSelector"),
					htmlElement = $(this).attr("elements"),
					RGB = $(htmlElement).css(cssProperty);
				if (typeof RGB != "undefined" && RGB != "transparent") {
					$(this).css("background-color", RGB);
					var color = $(this).css("background-color");
					color = color.replace('rgb(','').replace('rgba(','').replace(')','').replace(' ','').split(',');
					$(this).val(ThemeCaddy.Methods.RGBtoHex(color[0],color[1],color[2]));
				} else {
					$(this).val('---');
				}
				
				
			});
			
			// Set to:
			$(".color").blur(function() {	
				var inputVal = $(this).val().replace('#','');
				if (inputVal.length == 3) {
					var abbrHex = inputVal,
						one = abbrHex.substr(0,1),
						two = abbrHex.substr(1,1),
						three = abbrHex.substr(2,1);
					one += one+"";
					two += two+"";
					three += three+"";
					inputVal = one+two+three;
				} else if (inputVal.length < 6) {
					inputVal = '000000';
				}
				$(this).val(inputVal);
				var newColor = '#'+inputVal;
				$(this).css("background-color", newColor).val(newColor.replace('#',''));
				ThemeCaddy.Methods.storeElementStyles($(this).closest('.elementWrap'));
			});
			
			
			// ==================================================
			
			
			// Show Theme Editor
			// -----------------
			$('#ThemeEditor').css('display','block');
			
		},
		
		storeElementStyles: function(o) {
			
			// Stores an element's styles in its hidden field
			$('.elementWrap').each(function() {
				o = $(this);
				if (typeof o != "undefined") {
					if (typeof o.find('.elements').val() != "undefined") {
						var styles = o.find('.elements').val()+'{';
						
						// Get Background Only
						if ($(o).find('.colorBackgroundOnly').length && !o.find('.colorBackgroundOnly').val().match('---')) {
							styles += "background:#"+o.find('.colorBackgroundOnly').val()+" !important;";
						}
						
						// Get Background Color
						if ($(o).find('.colorBackground').length && !o.find('.colorBackground').val().match('---')) {
							styles += "background-color:#"+o.find('.colorBackground').val()+" !important;";
						}
						
						// Get Background Gradient
						if ($(o).find('.hideIt').hasClass('active')) {
							styles += "background-image:none !important;";
						}
						
						// Get Border Color
						if ($(o).find('.colorBorder').length && !o.find('.colorBorder').val().match('---')) {
							styles += "border-color:#"+o.find('.colorBorder').val()+" !important;";
						}
						
						// Get Font Family
						if ($(o).find('.fontList').length && typeof $(o).find('.fontList').attr('styles') != "undefined") {
							styles += "font-family:"+$(o).find('.fontList').attr('styles')+" !important;";
						}
						
						// Get Font Weight
						if (o.find('button.bold').hasClass('active')) {
							styles += "font-weight:bold !important;";
						} else if (o.find('button.bold').length) {
							styles += "font-weight:normal !important;";
						}
						
						// Get Font Style
						if (o.find('button.italic').hasClass('active')) {
							styles += "font-style:italic !important;";
						} else if (o.find('button.italic').length) {
							styles += "font-style:normal !important;";
						}
						
						// Get Text Decoration
						if (o.find('button.underline').hasClass('active')) {
							styles += "text-decoration:underline !important;";
						} else if (o.find('button.underline').length) {
							styles += "text-decoration:none !important;";
						}
						
						// Get Text Transform
						if (o.find('button.uppercase').hasClass('active')) {
							styles += "text-transform:uppercase !important;";
						} else if (o.find('button.uppercase').length) {
							styles += "text-transform:none !important;";
						}
						
						// Get Font Size
						if ($(o).find('.fontszr').length && !$(o).find('.fontszr').val().match('NaNpx')) {
							styles += "font-size:"+$(o).find('.fontszr').val()+" !important;";
						}
						
						// Get Font Color
						if (o.find('.colorText').length && o.find('.colorText').val() != "" && !o.find('.colorText').val().match('---')) {
							styles += "color:#"+o.find('.colorText').val()+" !important;";
						}
						
						styles += '}';
						$(o).find('input[id^="storage"]').val(styles);
					}
				}
			});
			$('#savedStyles').html(ThemeCaddy.Methods.writeNewStyles());
		},
		
		writeNewStyles: function() {
		
			// Consolidate all hidden field values, 
			// and create a string of CSS values to 
			// be placed in the #savedStyles <style /> tag
		
			var headings			= $('#storage_allHeadings').val() || '',
				h1 					= $('#storage_h1').val() || '',
				h2 					= $('#storage_h2').val() || '',
				h3 					= $('#storage_h3').val() || '',
				h4 					= $('#storage_h4').val() || '',
				text 				= $('#storage_text').val() || '',
				textLink 			= $('#storage_textLinks').val() || '',
				textLinkHover 		= $('#storage_textLinksHover').val() || '',
				utilityNavLink 		= $('#storage_utilityNavLink').val() || '',
				mainNavLink			= $('#storage_mainNavLink').val() || '',
				mainNavLinkHover	= $('#storage_mainNavLinkHover').val() || '',
				mainNavBG			= $('#storage_mainNavBG').val() || '',
				mainNavGradient		= $('#storage_mainNavGradient').val() || '',
				mainNavBorder		= $('#storage_mainNavBorder').val() || '',
				sideNavLink			= $('#storage_sideNavLink').val() || '',
				sideNavLinkHover	= $('#storage_sideNavLinkHover').val() || '',
				header1				= $('#storage_header1').val() || '',
				footer1				= $('#storage_footer1').val() || '',
				header2				= $('#storage_header2').val() || '',
				donateButton		= $('#storage_donateButton').val() || '',
				donateButtonText	= $('#storage_donateButtonText').val() || '',
				donateButtonHover	= $('#storage_donateButtonHover').val() || '',
				canvas2				= $('#storage_canvas2').val() || '',
				footer2				= $('#storage_footer2').val() || '',
				header3				= $('#storage_header3').val() || '',
				titleBar			= $('#storage_titleBar').val() || '',
				titleBarText		= $('#storage_titleBarText').val() || '',
				canvas3				= $('#storage_canvas3').val() || '',
				footer3				= $('#storage_footer3').val() || '',
				styleFixes			= ThemeCaddy.Elements.styleFixes || '';

			var newStyles = styleFixes 
							+ headings 
							+ h1 
							+ h2 
							+ h3 
							+ h4 
							+ text 
							+ textLink 
							+ textLinkHover 
							+ utilityNavLink 
							+ mainNavLink 
							+ mainNavLinkHover 
							+ mainNavBG 
							+ mainNavGradient 
							+ mainNavBorder 
							+ sideNavLink 
							+ sideNavLinkHover 
							+ header1 
							+ footer1 
							+ header2 
							+ donateButton 
							+ donateButtonText 
							+ donateButtonHover 
							+ canvas2 
							+ footer2 
							+ header3 
							+ titleBar 
							+ titleBarText 
							+ canvas3 
							+ footer3;

			return $.trim(newStyles);
		},
		
		RGBtoHex: function(R,G,B) {
			return ThemeCaddy.Methods.toHex(R) + ThemeCaddy.Methods.toHex(G) + ThemeCaddy.Methods.toHex(B);
		},
		
		toHex: function(N) {
			if (N==null) return "00";
			N=parseInt(N); if (N==0 || isNaN(N)) return "00";
			N=Math.max(0,N); N=Math.min(N,255); N=Math.round(N);
			return "0123456789ABCDEF".charAt((N-N%16)/16) + "0123456789ABCDEF".charAt(N%16);
		},
		
		hideStuff: function() {
		
			// Hide Gradient
			// -------------
			$("div.hide").each(function() {
				$(this).hide();
			});
			
			// Hide the gradient in the menu
			$("button.hideIt").each(function(){
				
				if ($($(this).attr('elements')).css('background-image').indexOf('none')>-1) {
					$(this).addClass("active");
				} else {
					$(this).removeClass('active');
				}
				
				
				$(this).click(function(){
					if ($(this).hasClass("active")) {
						$(this).removeClass('active');
					} else {
						$(this).addClass("active");
					}
					ThemeCaddy.Methods.storeElementStyles($(this).closest('.elementWrap'));
					return false;
				});
			});
		},
		
		checkForm: function() {
			if ($('#savedStyles').text() != "") {
				ThemeCaddy.Methods.postCSS();
			} else {
				alert('No new styles detected.');
			}
		},
		
		saveTab: function() {
			$('#txtPwd').keypress(function(e) {
				if (e.which == 13) {
					ThemeCaddy.Methods.checkForm();
				}
			});
			$("#saveChanges").click(function () {
				ThemeCaddy.Methods.checkForm();
				return false;
			});
			// Reset
			$("#setDefault").click(function () {
				ThemeCaddy.Methods.resetCSS();
			});
		},
		
		postCSS: function() {
		
			// Use AJAX to post a SOAP message to designer toolbox web service:
			// ----------------------------------------------------------------
		
			// Consolidate Data:
			// -----------------
			
			var styles 		= $.trim($('#savedStyles').text()),
				username 	= $("#txtUserName").val(),
				password 	= $("#txtPwd").val();			
			
			var soapBody = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Header><RequestHeader xmlns="http://blackbaud.com/"><Key>00890f00-07e9-4dd8-8251-cdc7bdd5c587</Key><UserName>'+username+'</UserName><Password>'+password+'</Password><ClientSitesID>1</ClientSitesID></RequestHeader></soap:Header><soap:Body><UpdateSiteStyleSheetCustom xmlns="http://blackbaud.com/"><styleSheet><ID>37</ID><CustomCss>'+styles+'</CustomCss></styleSheet></UpdateSiteStyleSheetCustom></soap:Body></soap:Envelope>';
			
			var domain = document.domain,
				url = location.protocol+"//"+domain+"/webservices/designertoolboxservice.asmx?op=UpdateSiteStyleSheetCustom";	
			
			// Post request:
			// -------------
			$.ajax({
				type: "post",
				url: url,
				contentType: "text/xml; charset=\"utf-8\"",
				data: soapBody,
				dataType: "xml",
				processData: false,
				success: function (response) {
					alert('Your changes to the page styles have been saved.');
				},
				error: function (r, status, e) {
					alert('ERROR: \nStatus: ' + status + '\nError Details: ' + e);
				}
			});
		},
		
		resetCSS: function() {

			// Use AJAX to post a SOAP message to designer toolbox web service:
			// ----------------------------------------------------------------
		
			// Consolidate Data:
			// -----------------
			var username 	= $("#txtUserName").val(),
				password 	= $("#txtPwd").val(),
				soapBody = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Header><RequestHeader xmlns="http://blackbaud.com/"><Key>00890f00-07e9-4dd8-8251-cdc7bdd5c587</Key><UserName>'+username+'</UserName><Password>'+password+'</Password><ClientSitesID>1</ClientSitesID></RequestHeader></soap:Header><soap:Body><UpdateSiteStyleSheetCustom xmlns="http://blackbaud.com/"><styleSheet><ID>37</ID><CustomCss>h1{border-color:none;}</CustomCss></styleSheet></UpdateSiteStyleSheetCustom></soap:Body></soap:Envelope>';
			
			var domain = document.domain,
				url = location.protocol+"//"+domain+"/webservices/designertoolboxservice.asmx?op=UpdateSiteStyleSheetCustom";
			
			
			// Post request:
			// -------------
			$.ajax({
				type: "post",
				url: url,
				contentType: "text/xml; charset=\"utf-8\"",
				data: soapBody,
				dataType: "xml",
				processData: false,
				success: function (response) {
					var answer = confirm("The page styles have been successfully reset.");
					if (answer) window.location.reload();
					else window.location.reload();
				},
				error: function (r, status, e) {
					alert('ERROR: \nStatus: ' + status + '\nError Details: ' + e);
				}
			});
		},
		
		
		
		// -------------
		//  EMAIL TOOL:
		// =============
		
		createEmailInterface: function() {
			var toolHtml = 	ThemeCaddy.Templates.email;
			$(toolHtml).prependTo('#contentPrimary > .gutter > .singleCol:first');
		},
		
		initEmailToolControls: function() {
			
			$('#tabs3').tabs();
		
			$(".fontList dt a").click(function() {
				var newdl = $(this).closest("dl");
				var newul = $(newdl).find("ul");
				$(newul).toggle();
				ThemeCaddy.Methods.resetEmailViewer();
				return false;
			});
				
			$(".fontList dd ul li a").click(function() {
				var newdl = $(this).closest("dl");
				var text = $(this).html();
				var targetfont = $(this).css("font-family");
				var newid = $(newdl).attr("elements");
				var newdta = $(newdl).find("dt a");
				var newul = $(newdl).find("ul");
				$(newdta).html(text);
				$(newid).css("font-family", targetfont);
				$(newul).hide();
				ThemeCaddy.Methods.resetEmailViewer();
				return false;
			}); 
				
			$("dl.fontList li a").click(function() {
				if ($(this).parents().hasClass("active"))
				var newdl = $(this).closest("dl");
				var newul = $(newdl).find("ul");
				$(newul).hide();
				ThemeCaddy.Methods.resetEmailViewer();
				return false;
			});
			
			$("button.bold").each(function() {
				$(this).click(function() {
					var targid = $(this).closest("div").attr("elements");
					if ($(this).hasClass("active")) {
						$(this).removeClass('active');
						$(targid).css("font-weight", "normal");
					} else {
						$(this).addClass("active");
						$(targid).css("font-weight", "bold");
					}
					ThemeCaddy.Methods.resetEmailViewer();
					return false;
				});
			});
				
			$("button.italic").each(function() {	
				$(this).click(function() {
					var targid = $(this).closest("div").attr("elements");
					if ($(this).hasClass("active")) {
						$(this).removeClass('active');
						$(targid).css("font-style", "normal");
					} else {
						$(this).addClass("active");			
						$(targid).css("font-style", "italic");
					}
					ThemeCaddy.Methods.resetEmailViewer();
					return false;
			   });
				
		   });
				
			$("button.underline").each(function() {
				$(this).click(function() {
					var targid = $(this).closest("div").attr("elements");
					if ($(this).hasClass("active")) {
						$(this).removeClass('active');
						$(targid).css("text-decoration", "none");
					} else {
						$(this).addClass("active");
						$(targid).css("text-decoration", "underline");
					}
					ThemeCaddy.Methods.resetEmailViewer();
					return false;
				});
			});
		   
			$("button.uppercase").each(function() {
				$(this).click(function() {
					var targid = $(this).closest("div").attr("elements");
					if ($(this).hasClass("active")) {
						$(this).removeClass('active');
						$(targid).css("text-transform", "none");
					} else {
						$(this).addClass("active");
						$(targid).css("text-transform", "uppercase");
					}
					ThemeCaddy.Methods.resetEmailViewer();
					return false;
			  });
		   });
				
			$(".fontszr").each(function(){
				$(this).val(function(){
					var pardiv = $(this).closest("div");
					var newid = $(pardiv).attr("elements");
					var originalFontSize = $(newid).css("font-size");
					var currentFontSizeNum = parseFloat(originalFontSize, 10);
					return currentFontSizeNum;
				});
			});
			
			$("button.fontszup").each(function(){				
				$(this).click(function() {
					var pardiv = $(this).closest("div");
					var parinput = $(pardiv).find("input");
					var newid = $(pardiv).attr("elements");
					var currentFontSize = $(newid).css("font-size");
					var currentFontSizeNum = parseFloat(currentFontSize, 10);
					var newFontSize = currentFontSizeNum + 1;
					$(newid).css('font-size', newFontSize);
					$(parinput).val(newFontSize);	
					ThemeCaddy.Methods.resetEmailViewer();
					return false;
				});
			});
			
			$("button.fontszdown").each(function(){				
				$(this).click(function(){
					var pardiv = $(this).closest("div");
					var parinput = $(pardiv).find("input");
					var newid = $(pardiv).attr("elements");
					var currentFontSize = $(newid).css("font-size");
					var currentFontSizeNum = parseFloat(currentFontSize, 10);
					var newFontSize = currentFontSizeNum - 1;
					$(newid).css('font-size', newFontSize);
					$(parinput).val(newFontSize);
					ThemeCaddy.Methods.resetEmailViewer();
					return false;
				});	
			});			
			
			$(".color").each(function(){
				var csstype = $(this).attr("cssSelector");
				var getcolor = $(this).attr("elements");
				var rgbString = $(getcolor).css(csstype);
				var ffam = $(getcolor).css("font-family");
				var fsz = $(getcolor).css("font-size");				
				$(getcolor).css(csstype,rgbString);		
				$(getcolor).css('font-family',ffam);		
				$(getcolor).css('font-size',fsz);		
				$(this).css("background-color", rgbString);
				$(this).val(function(){
					var color = $(this).css("background-color");
					if (color.substr(0, 1) === '#') {
						return color;
					}
					var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);		
					var red = parseInt(digits[2]);
					var green = parseInt(digits[3]);
					var blue = parseInt(digits[4]);		
					var rgb = blue | (green << 8) | (red << 16);
					return digits[1] + rgb.toString(16);
				});
			});
				
			$(".color").change(function() {
				var newColor = '#'+$(this).val();
				var newid = $(this).attr("elements");
				var cssType = $(this).attr("cssSelector");
				$(newid).css(cssType, newColor);
				$(this).css('background-color', newColor);
				ThemeCaddy.Methods.resetEmailViewer();
			});				
				
			$("div.hide").hide();

			$(".text").change(function() {
				var newid = $(this).attr("elements");		
				var checkbox = $(this).parent().find('input[type="checkbox"]');
				var text = $(this).val();
				
				switch (newid) {
					case ".siteName" :
						text = text;
						break;
					case ".siteAddr" :
						text = text;
						break;
					case ".sitePhone" :
						text = "Phone: "+text+"&nbsp;&nbsp;|&nbsp;&nbsp;";
						break;
					case ".siteFax" :
						text = "Fax: "+text+"&nbsp;&nbsp;|&nbsp;&nbsp;";
						break;
					case ".siteEmail" :
						text = "Email: <a href=\"mailto:"+text+"\">"+text+"</a>";
						break;
						
				}
				checkbox.attr('checked','checked');
				$(newid).html(text).css('display','inline');				
				ThemeCaddy.Methods.resetEmailViewer();
			});
			
			// Show Email Editor
			$('#EmailEditor').css('display','block');
			
			$('input[type="checkbox"]').click(function() {
				var field = $(this).parent().find('input[type="text"]');
				var element = field.attr('elements');
				var checkbox = $(this);
				if (checkbox.is(':checked')) {
					$(element).css('display','inline');
				} else {
					$(element).css('display','none');
				}
				$('#EmailContentPane').html('');
				$('#EmailContentViewer').find('ul li').removeClass('selected');
			});
			
			$('#sideBar').prependTo('body');
		},
		
		initEmailHtmlPreview: function() {
			$('#EmailContentPreview').html($('#oneColumnTemplate').html());
			
			function fillEmailPreview(link,o) {
				$('#EmailContentPreview').html(o.html());
				link.closest('ul').find('li').removeClass('selected');
				link.closest('li').addClass('selected');
			}
			
			$('#showAppealTemplate').click(function() {
				fillEmailPreview($(this),$('#appealTemplate'));
				return false;
			});
			
			$('#showNewsletterTemplate').click(function() {
				fillEmailPreview($(this),$('#newsletterTemplate'));
				return false;
			});
			
			$('#showOneColumnTemplate').click(function() {
				fillEmailPreview($(this),$('#oneColumnTemplate'));
				return false;
			});
		},
		
		initEmailHtmlViewer: function() {
		
			$('#EmailContentViewer').find('ul.emailContentMenu li a').click(function() {
				$('#EmailContentViewer').find('ul.emailContentMenu li').removeClass('selected');
				$(this).closest('li').addClass('selected');
			});
	
			// Select all HTML code when clicked
			$('#EmailContentPane').click(function() {
				if (document.selection) {
					var range = document.body.createTextRange();
						range.moveToElementText(this);
					range.select();
				} else if (window.getSelection) {
					var range = document.createRange();
					range.selectNode(this);
					window.getSelection().addRange(range);
				}
			});
			
			// LOAD TEMPLATES
			$('#showAppeal').click(function() {
				$('#EmailContentPane').html('Loading...');
				var emailHtml = $('#appealTemplate').html();
				$('#EmailContentPane').text(emailHtml);
				return false;
			});
			$('#showNewsletter').click(function() {
				$('#EmailContentPane').html('Loading...');
				var emailHtml = $('#newsletterTemplate').html();
				$('#EmailContentPane').text(emailHtml);
				return false;
			});
			$('#showOneColumn').click(function() {
				$('#EmailContentPane').html('Loading...');
				var emailHtml = $('#oneColumnTemplate').html();
				$('#EmailContentPane').text(emailHtml);
				return false;
			});
			
			
			// Already Linked
			$('#showAlreadyLinkedUser').click(function() {
				ThemeCaddy.Methods.fetchEmailContent('Already Linked User','#linkedContent');
				return false;
			});
			
			// DONATION CONFIRMATION
			$('#showDonation').click(function() {
				ThemeCaddy.Methods.fetchEmailContent('Donation Confirmation','#donationContent');
				return false;
			});
	
			// ERECEIPT
			$('#showEReceipt').click(function() {
				ThemeCaddy.Methods.fetchEmailContent('Donation eReceipt','#eReceiptContent');
				return false;
			});
			
			// NEW USER
			$('#showNewUser').click(function() {
				ThemeCaddy.Methods.fetchEmailContent('Welcome!','#newUserContent');
				return false;
			});
			
			// FORGOTTEN PASSWORD
			$('#showForgotten').click(function() {
				ThemeCaddy.Methods.fetchEmailContent('Forgotten Username/Password','#forgottenContent');
				return false;
			});
			
			// MEMBERSHIP
			$('#showMembership').click(function() {
				ThemeCaddy.Methods.fetchEmailContent('Membership Confirmation','#memberContent');
				return false;
			});
			
			// EVENT REGISTRATION
			$('#showEventReg').click(function() {
				ThemeCaddy.Methods.fetchEmailContent('Event Registration Confirmation','#eventContent');
				return false;
			});
			
			// EVENT REGISTRATION (CLASSIC)
			$('#showEventRegClassic').click(function() {
				ThemeCaddy.Methods.fetchEmailContent('Thank you for registering!','#eventClassicContent');
				return false;
			});
			
			// ECARDS
			$('#showECards').click(function() {
				ThemeCaddy.Methods.fetchEmailContent('eCard Confirmation','#eCardContent');
				return false;
			});
			
			// VOLUNTEER
			$('#showVolunteer').click(function() {
				ThemeCaddy.Methods.fetchEmailContent('Thank You For Volunteering','#volunteerContent');
				return false;
			});
			
			// PAYMENT
			$('#showPayment').click(function() {
				ThemeCaddy.Methods.fetchEmailContent('Payment Confirmation','#paymentContent');
				return false;
			});
		},
		
		resetEmailViewer: function() {
			if ($('#EmailContentPane').length && $('#EmailContentPane').html() != "") {
				$('#EmailContentPane').html("");
				$('.emailContentMenu li').removeClass('selected');
			}
		},
		
		fetchEmailContent: function(subject,selector) {
			var emailContentPane = $('#EmailContentPane');
			var emailContentCompiler = $('#EmailContentCompiler');
			var templateHtml = $('#oneColumnTemplate').html();

			emailContentPane.html('Loading...');
			emailContentCompiler.html(templateHtml);
			emailContentCompiler.find('*').each(function() {
				if (!$(this).is(':visible') && !$(this).is('br')) {
					$(this).remove();
				}
			});
			emailContentCompiler.find('.heading').html( subject );
			emailContentCompiler.find('.body').html( $(selector).html() );
			var compiledHtml = emailContentCompiler.html();
			emailContentPane.text(compiledHtml);
		}
	}
};


/*==============================================
 Console Reset
 - Paul Irish
------------------------------------------------
 Lets you use console.log without breaking in IE
 Usage: log('inside coolFunc', this, arguments);
 paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
----------------------------------------------*/
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);(typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a))}};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

RegExp.escape = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
};