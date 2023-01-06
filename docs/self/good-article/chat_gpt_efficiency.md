# 面向软件工程师的 3 个简单的 ChatGPT 技巧：立即提高您的工作效率

![](https://abelsun-1256449468.cos.ap-beijing.myqcloud.com/image/202301061314590.png)

AI 增强您的写作和工作效率

准备好将您的工作流程从爬行转变为冲刺了吗？ChatGPT 具有您所需的功能，可让您自动执行日常任务、促进与同事的协作并访问丰富的知识。在本文中，我们将向您介绍 ChatGPT 的变革性功能 - 提高效率提高生产力，使更智能地工作成为第二天性。

在 [https://chat.openai.com/](https://chat.openai.com/) 亲自尝试一下。

## 1. 简化重复性任务

通过使用 ChatGPT，软件工程师可以通过自动化单调的任务来节省宝贵的时间和精力。通过该应用程序，可以轻松处理繁琐的工作，例如生成样板代码，运行测试等，因此可以优先处理更关键的问题。

下面是 ChatGPT 如何使用样式组件（包括主页、关于页面和联系我们页面）为 Next.js 应用创建样板代码的示例：

要为主页创建样板代码，您可以这样说：“嘿 ChatGPT，你能为具有样式组件的 Next.js 应用生成样板代码吗？我想创建一个带有页眉、主节和页脚的主页。您能否包含指向“关于”和“联系我们”页面的链接？

ChatGPT 可能会使用类似于以下内容的代码进行响应：

```
import React from 'react'  
import Link from 'next/link'  
import styled from 'styled-components'  
  
const Header = styled.header`  
display: flex;  
align-items: center;  
justify-content: space-between;  
height: 50px;  
background-color: #333;  
color: #fff;  
padding: 0 20px;  
`  
  
const Main = styled.main`  
display: flex;  
flex-direction: column;  
align-items: center;  
justify-content: center;  
height: calc(100vh - 100px);  
`  
  
const Footer = styled.footer`  
display: flex;  
align-items: center;  
justify-content: space-between;  
height: 50px;  
background-color: #333;  
color: #fff;  
padding: 0 20px;  
`  
  
const Home = () => (  
<>  
<Header>  
<Link href="/">  
<a>Home</a>  
</Link>  
<Link href="/about">  
<a>About</a>  
</Link>  
<Link href="/contact">  
<a>Contact Us</a>  
</Link>  
</Header>  
<Main>  
<h1>Welcome to the Home Page!</h1>  
</Main>  
<Footer>  
<p>Copyright 2021</p>  
<Link href="/privacy-policy">  
<a>Privacy Policy</a>  
</Link>  
</Footer>  
</>  
)  
  
export default Home
```

此代码创建一个主页，其中包含页眉、主节和页脚，所有这些都使用样式化组件设置样式。页眉和页脚分别包含指向“关于”和“联系我们”页面的链接。您可以交换单词“home”或“about”，并继续让它为这些页面生成可用的样板代码。

此外，您可以通过说“chatgpt 请更新上面的示例以使用......”来继续迭代这些示例。或“请将主组件的标头重构为独立组件”。

然而，仍然缺少的是引用特定行的能力，但我相信开发人员正在研究这个问题，以便您可以更好地将上下文馈送到模型中，类似于种子的工作方式。

##  2. 获取反馈
使用 ChatGPT，您可以获得有关编码的有用反馈，并在任何问题或错误变得太大之前快速识别它们。

在这个例子中，我们使用一个函数来计算数组中元素的总和：

```
func sum（arr []int） int  { result ：= 0 for i ：= 0  
; i < len（arr）; i++ { result += arr[i]  
 }  
 return  
  
 result  
}
```

你可以要求chatGPT使这段代码更有效率，比如说：“嘿ChatGPT，你能建议一些方法让这段代码更有效率吗？我正在尝试计算数组中元素的总和。

ChatGPT 可能会使用建议进行响应，例如使用不同的循环结构，例如 for range 循环，这通常比使用上面显示的索引循环更有效。或者，ChatGPT 可能会建议使用内置函数，如“math”包中的“sum”，这比编写自己的循环更有效。

### BUG 猎手

您还可以使用它来查找应用程序中的潜在错误。您将需要提供更多上下文。您可以将包之间的函数分解为小块，然后将它们提供给chatgpt，如下所示：
```
package pkgA  
  
func Add（a int， b int） int  {  
 return a + b  
}
```


然后，您需要将包的名称指定为“github.com/user/pkgA”。您还可以在 github 上为实际包提供该上下文和关联。

现在假设你想使用 ChatGPT 来帮助你在另一个包中编写一个函数，该函数从“pkgA”调用“Add”函数。下面是 ChatGPT 如何帮助您查找包之间的错误的示例，包括代码中的实际错误：

```
package pkgB  
  
import “github.com/user/pkgA”  
  
func Sum（arr []int） int  { result ：= 0 for i ：= 0  
; i < len（arr）; i++ { result = pkgA.Add（result， arr[i]）  
 }  
 return  
  
 result  
}
```

此示例中的错误是对“pkgA.Add”的函数调用使用了错误的运算符（= 而不是 +=）。此错误将导致函数始终返回 0，即使输入数组不同也是如此。

要要求 ChatGPT 查看此代码并查找错误，您可以这样说：“嘿 ChatGPT，你能检查此代码是否存在错误吗？我正在尝试编写一个使用 pkgA.Add 函数将数组的结果相加的函数”

ChatGPT可以检测并快速解决您遇到的任何技术问题。例如，它可能建议确认导入包的正确命名和定位，或者使用正确数量和类型的参数调用函数。它甚至可以识别代码中的错误，然后提供有关如何使用正确的运算符进行补救的答案！

例如，ChatGPT 可能会建议：

> 代码中似乎存在错误。调用 'pkgA.Add' 的函数使用的是赋值运算符 — '=' 而不是加法运算符 - '+=' 。因此，无论输入什么数组，这将始终确保返回 0。若要解决此问题，您可能需要考虑使用正确的运算符。

ChatGPT 可以成为救星，在代码中发现和修复错误之前将其视为问题。此外，ChatGPT 可帮助您创建可靠且强大的代码，这些代码将持
## 3. 获取帮助

如果您在项目时遇到问题，可以使用 ChatGPT 获取帮助。例如，如果您在文件验证和错误处理方面遇到问题，您可以说：“嘿 ChatGPT，我正在尝试实现一项允许用户上传和下载文件的功能。我在处理文件验证和验证错误时遇到问题。你能帮我集思广益一些方法或建议一些可以用来解决这个问题的资源吗？

你最终会得到这样的东西：

> 当然，这里有一些建议，您可以使用这些方法和资源来解决文件验证和验证错误处理问题：
> 
> 1. 验证文件类型和大小是否在可接受的范围内。您可以使用 Go 中内置的“mimetype”库来检查文件类型，并使用 “os” 库来检查文件大小。
> 
> 2. 检查应拒绝的常见文件类型，例如可执行文件。您可以使用“mimetype”库或正则表达式来标识这些类型的文件。
> 
> 3. 如果文件无效，则向用户显示相应的错误消息。可以使用客户端和服务器端验证的组合来确保用户了解其文件的任何问题。
> 
> 4. 使用提供文件验证和错误处理功能的库或框架。可以考虑的一些选项包括 Go 的“验证器”库或 Node.js 的“multer”中间件。

您可以通过说“请提供 1 的示例。并集思广益其他变化”

如果您面临挑战，可以使用 ChatGPT 寻求帮助。在他们的帮助下，头脑风暴解决方案变得更加容易——他们可以指导您找到解决问题并达到新高度的方法。这不仅可以节省时间，还可以减少工作量。

## 4.亲自尝试并增强您的工作流程！

最终，ChatGPT是软件工程师的必备品。它不仅可以通过自动化繁琐的任务来节省时间和精力，还可以提供对丰富知识的访问，这些知识可以帮助您克服项目中的任何障碍或挑战。它的实用性并不止于此——ChatGPT 提供了有关如何简化工作流程、优化代码和比以往更快地学习新技术技能的有用见解。

但是，我确实想警告您最后几件事......

### 一些最后的警告

虽然功能强大，但这个工具并不能完全取代人类的想法，你会发现它仍然需要调整，你需要修改代码，而不是把这个机器人吐出的所有东西都看在眼里。即使错误或不准确，ChatGPT 也可以作为一个强大的工具（甚至可能是盟友？）来帮助集思广益并查看代码中的其他观点。只是不要盲目相信它。