# LAYOUTS

**layouts 디렉토리는 애플리케이션의 레이아웃을 포함하는 디렉토리입니다. 레이아웃은 여러분의 페이지의 모습이나 느낌을 변경하는 데 사용됩니다(예를 들어 사이드바를포함하는 것 같은).**

- layouts 디렉토리의 모든 파일(최상위 레벨)은 페이지 컴포넌트의 layout 프로퍼티를 사용하여 접근가능한 사용자 정의 layout을 만들 수 있습니다.
       
       export default {
         layout: 'blog',
         // 또는
         layout(context) {
           return 'blog'
         }
       }
