import{a as u,b as d}from"./chunk-IXG5BH3D.js";import"./chunk-IN7EUNJS.js";import{H as i,Ob as h,Xb as p,Y as s,g as o,ha as c,wb as r,xb as m}from"./chunk-BFR4IEYA.js";import"./chunk-KAT7YFEL.js";var v=(()=>{class n{constructor(){this.state$=new o({count:5,msg:"",overMax:!1,underMin:!1,max:10,min:2}),this.updateMessage=t=>{let e=t.overMax?"too high!":t.underMin?"too low!":"";this.setState("msg",e)},this.viewModel$=this.state$.pipe(i(5),s(t=>this.checkState()),s(this.updateMessage)),this.setState=d(this.state$),this.getState=u(this.state$)}async checkState(){let{count:t,min:e,max:a,overMax:l,underMin:g}=await this.getState();t>a!==l&&this.setState("overMax",t>a),t<e!==g&&this.setState("underMin",t<e)}async up(){let t=await this.getState("count");this.setState("count",t+1)}async down(){let t=await this.getState("count");this.setState("count",t-1),this.setState({min:3,max:5})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=c({type:n,selectors:[["app-observable-state"]],standalone:!0,features:[p],decls:2,vars:0,template:function(e,a){e&1&&(r(0,"h1"),h(1,"Observable state"),m())},styles:[`section[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: 150px 150px 150px;
  }
  section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
    text-align: center;
    font-size: 30px;
  }`],changeDetection:0})}}return n})();export{v as ObservableStateComponent};
