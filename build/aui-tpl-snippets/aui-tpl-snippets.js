AUI.add('aui-tpl-snippets-base', function(A) {
var Lang = A.Lang,

	AArray = A.Array,

	_SPACE = ' ',
	_EMPTY_STR = '';

A.TplSnippets = {
	getClassName: function(auiCssClass, cssClass) {
		var prefix = _SPACE + A.getClassName(_EMPTY_STR);

		return  A.Array(cssClass).join(_SPACE) + (auiCssClass ? (prefix + A.Array(auiCssClass).join(prefix)) : _EMPTY_STR);
	}
};

}, '@VERSION@' ,{skinnable:false, requires:['aui-template']});
AUI.add('aui-tpl-snippets-select', function(A) {
A.Template.register(
	'select',
	[
		'<tpl if="values.label !== undefined">',
			'<label class="{[A.TplSnippets.getClassName(values.auiLabelCssClass, values.labelCssClass)]}" for="{id}" id="{labelId}" name="{labelName}" style="{labelStyle}">{label}</label>',
		'</tpl>',
		'<select class="{[A.TplSnippets.getClassName(values.auiCssClass, values.cssClass)]}" id="{id}" name="{name}" style="{style}">',
				'<tpl for="options">',
					'<option value="{value}">{label}</option>',
				'</tpl>',
		'</select>'
	]
);

}, '@VERSION@' ,{skinnable:false, requires:['aui-tpl-snippets-base']});
AUI.add('aui-tpl-snippets-input', function(A) {
A.Template.register(
	'input',
	[
		'<tpl if="values.label !== undefined">',
			'<label class="{[A.TplSnippets.getClassName(values.auiLabelCssClass, values.labelCssClass)]}" for="{id}" id="{labelId}" name="{labelName}" style="{labelStyle}">{label}</label>',
		'</tpl>',
		'<input autocomplete="{autocomplete}" class="{[A.TplSnippets.getClassName(values.auiCssClass, values.cssClass)]}" id="{id}" name="{name}" placeholder="{placeholder}" size="{size}" style="{style}" type="{type}" value="{value}" />'
	]
);

}, '@VERSION@' ,{skinnable:false, requires:['aui-tpl-snippets-base']});
AUI.add('aui-tpl-snippets-textarea', function(A) {
A.Template.register(
	'textarea',
	[
		'<tpl if="values.label !== undefined">',
			'<label class="{[A.TplSnippets.getClassName(values.auiLabelCssClass, values.labelCssClass)]}" for="{id}" id="{labelId}" name="{labelName}" style="{labelStyle}">{label}</label>',
		'</tpl>',
		'<textarea class="{[A.TplSnippets.getClassName(values.auiCssClass, values.cssClass)]}" id="{id}" name="{name}" placeholder="{placeholder}" value="{valueAttr}" style="{style}">{value}</textarea>'
	]
);

}, '@VERSION@' ,{skinnable:false, requires:['aui-tpl-snippets-base']});
AUI.add('aui-tpl-snippets-checkbox', function(A) {
A.Template.register(
	'checkbox',
	[
		'<input class="{[A.TplSnippets.getClassName(values.auiCssClass, values.cssClass)]}" id="{id}" name="{name}" placeholder="{placeholder}" size="{size}" style="{style}" type="checkbox" value="{value}" />',
		'<tpl if="values.label !== undefined">',
			'<label class="{[A.TplSnippets.getClassName(values.auiLabelCssClass, values.labelCssClass)]}" for="{id}" id="{labelId}" name="{labelName}" style="{labelStyle}">{label}</label>',
		'</tpl>'
	]
);

}, '@VERSION@' ,{skinnable:false, requires:['aui-tpl-snippets-base']});


AUI.add('aui-tpl-snippets', function(A){}, '@VERSION@' ,{use:['aui-tpl-snippets-base','aui-tpl-snippets-select','aui-tpl-snippets-input','aui-tpl-snippets-textarea','aui-tpl-snippets-checkbox'], skinnable:false});

