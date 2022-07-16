import { scene } from './scene/index.js'//Three.js三维场景
import { renderer, camera } from './RendererCamera.js'//渲染器对象和相机对象
import { CSS2LabelRenderer } from './CSS2DRenderer.js';
import { CSS3LabelRenderer } from './CSS3DRenderer.js';
// 渲染循环
function render() {
  CSS2LabelRenderer.render(scene, camera); //渲染HTML标签对象
  CSS3LabelRenderer.render(scene, camera);
  renderer.render(scene, camera); //执行渲染操作
  requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  // console.log(camera.position);//通过相机控件OrbitControls旋转相机，选择一个合适场景渲染角度
}
render();

export {renderer}
