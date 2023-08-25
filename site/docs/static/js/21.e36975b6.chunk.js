webpackJsonp([21],{55:function(e,n){e.exports="\n## Update\n\n`update` method is an important built-in core method for updating components themselves. For example:\n\n```js\nthis.update()\n```\n\nFor example, click on the mask of the pop-up layer to close the pop-up, pass it to the parent component in the react, let the parent component update, while Omi advocates self-update, so that the diff area is smaller.\n\n```js\nonMaskClick = ()=> {\n  //change props\n  this.props.show = false\n  //prevent parent component from updating diff without results\n  this.prevProps.show = false\n  //update \n  this.update()\n  //trigger events, which can be used to change external state variables to maintain consistency, but external components need not be updated\n  this.fire('close')\n}\n```\n\nCode above is the same as:\n\n```js\nonMaskClick = ()=> {\n  this.updateProps({\n    show: false\n  })\n  this.fire('close')\n}\n```\n\n\n### UpdateSelf\n\n![](https://github.com/Tencent/omi/raw/master/assets/update.png)\n\n`updateSelf` method does not update child components.\n"}});
//# sourceMappingURL=21.e36975b6.chunk.js.map