// 代码内容数据
const codeSnippets = {
    square: `
<!-- 平方和计算器代码 -->
<!DOCTYPE html>
<html>
<head>
    <title>平方和计算器</title>
    <style>
        /* 样式代码... */
    </style>
</head>
<body>
    <div class="calculator">
        <h2>平方和计算器</h2>
        <input type="number" id="nInput">
        <button onclick="calculate()">计算</button>
        <div id="result"></div>
    </div>
    
    <script>
        function calculate() {
            const n = parseInt(document.getElementById('nInput').value);
            const sum = n * (n + 1) * (2*n + 1) / 6;
            document.getElementById('result').innerHTML = \`结果: \${sum}\`;
        }
    </script>
</body>
</html>
    `,

    harmonic: `
<!-- 调和级数计算器代码 -->
const harmonicSum = (n) => {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += 1/i;
    }
    return total.toFixed(4);
};

console.log(harmonicSum(100));  // 输出: 5.1874
    `,

    game: `
# 大学生活模拟游戏核心代码
class Student:
    def __init__(self):
        self.gpa = 3.0
        self.mood = 50
        self.health = 50

    def study(self):
        self.gpa += 0.3
        self.mood -= 10
        
    def join_club(self):
        self.mood += 15
        self.gpa -= 0.2

def main():
    student = Student()
    # 游戏主循环...
    `,
};

// 显示代码模态框
function showCode(type) {
    const modal = document.getElementById('codeModal');
    const container = document.getElementById('codeContainer');
    container.textContent = codeSnippets[type];
    modal.style.display = 'block';
}

// 关闭模态框
function closeModal() {
    document.getElementById('codeModal').style.display = 'none';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('codeModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
