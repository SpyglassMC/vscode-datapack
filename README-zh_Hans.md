![banner](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/banner.png)

[![Discord](https://img.shields.io/discord/666020457568403505?logo=discord&style=flat-square)](https://discord.gg/EbdseuS)
[![GitHub Actions](https://img.shields.io/github/workflow/status/SPGoding/vscode-datapack-helper-plus/release?logo=github&style=flat-square)](https://github.com/SPGoding/vscode-datapack-helper-plus/actions)
[![VSCode Marketplace](https://img.shields.io/visual-studio-marketplace/v/SPGoding.datapack-language-server.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-language-server)
[![VSCode Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/SPGoding.datapack-language-server.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-language-server)
[![VSCode Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/SPGoding.datapack-language-server.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-language-server)
[![VSCode Marketplace Rating](https://img.shields.io/visual-studio-marketplace/stars/SPGoding.datapack-language-server.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-language-server)
[![License](https://img.shields.io/github/license/SPGoding/vscode-datapack-helper-plus.svg?style=flat-square)](https://github.com/SPGoding/vscode-datapack-helper-plus/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)

Datapack Helper Plus，简称 DHP，中文名大憨批，是一组能够为 Minecraft Java版的数据包文件（包括进度、函数、战利品表、断言、配方、各种标签）提供支持的插件。您可以将其安装在 [VSCode](https://code.visualstudio.com/) 编辑器上。

# 免责声明

我们尽了最大的努力来保证您的数据包的文件安全。然而，在某些极端情况下，您的文档可能仍会被大憨批破坏。遗憾的是，我们无法为这种情况提供任何帮助。请随时**备份**您宝贵的数据包作品（如上传到网盘等）。即使您最终选择不使用大憨批，我们也建议您不时进行备份！

# 安装

点这个图标就可以从网页安装：[![VSCode Marketplace](https://img.shields.io/visual-studio-marketplace/v/SPGoding.datapack-language-server.svg?logo=visual-studio-code&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-language-server)。

或者，您也可以直接打开 VSCode，按 Ctrl + P，复制粘贴 `ext install spgoding.datapack-language-server` 并回车。

**提示**：大憨批要求 VSCode 的版本最低为 `1.44.0`。请确保你安装的 VSCode 在该版本之后发布。

# 特性

## 工作区支持

请使用数据包的根文件夹（也就是 `data` 文件夹与 `pack.mcmeta` 文件所处的文件夹）作为你的工作区的根文件夹，以获得最佳的体验。

此外，大憨批完全支持多个根文件夹的工作区，只需要确保在使用「文件」→「将文件夹添加到工作区…」功能添加数据包时添加的都是数据包的根文件夹即可。然而，有关 VSCode 的工作区的优质中文资料十分匮乏，不想花时间了解怎么使用多根文件夹的工作区的用户可以忽略掉大憨批的这个特性。工作区中其他的非数据包根文件夹不会受到大憨批影响。

每一个根文件夹中都能访问同一工作区下其他根文件夹中的函数/进度/战利品表等文件内容。工作区中根文件夹的顺序将会影响它们在大憨批当中的优先级。最开始的根文件夹会第一个被加载，最后的根文件夹会在最后加载，也就是说根文件夹出现得**越早**，它在大憨批中的的优先级**越低**。这和游戏在加载数据包时决定用哪个数据包中的文件覆盖另一个文件的逻辑是完全一致的。举个例子，如果你的多根文件夹工作区的文件结构是这个样子：

```
─── （根文件夹）数据包A
   ├── data
   |   └── spgoding
   |       └── functions
   |           └── foo.mcfunction
   └── pack.mcmeta
─── （根文件夹）数据包B
   ├── data
   |   └── spgoding
   |       └── functions
   |           └── foo.mcfunction
   └── pack.mcmeta
```

然后你使用 `F2` 功能在一个函数文件中把函数 `spgoding:foo` 重命名为了 `wtf:foo`，只有在数据包 B 中的文件（`数据包B/data/spgoding/functions/foo.mcfunction`）会被移动到 `Datapack B/data/wtf/functions/foo.mcfunction`，即使在数据包A中也有一个具有同样命名空间 ID 的函数文件（`Datapack A/data/spgoding/functions/foo.mcfunction`）。

如果你尝试在 Minecraft 中执行以下命令，你也会发现被执行的函数是数据包B中的。
```mcfunction
datapack enable "file/Datapack A" first
datapack enable "file/Datapack B" last
function spgoding:foo
```

通过这样的逻辑，大憨批确保了它处理数据包的行为是和 Minecraft 一致的。

**提示**：你可以在 VSCode 中拖放根文件夹来排序它们，大憨批会自动更新它们在大憨批中的优先级，十分方便。

## 多语言支持

大憨批支持多种语言。目前以下语言已经完全支持：

| 语言     | VSCode Language ID |
| -------- | ------------------ |
| 德语     | `de`               |
| 英语     | `en`               |
| 法语     | `fr`               |
| 意大利语 | `it`               |
| 日语     | `ja`               |
| 简体中文 | `zh-cn`            |

如果您愿意帮助翻译大憨批至其他语言，我们将不胜感激！请查看 [CONTRIBUTING.md](https://github.com/SPGoding/vscode-datapack-helper-plus/blob/master/CONTRIBUTING.md) 了解更多信息。

## 语义化高亮

> Wiki: https://github.com/SPGoding/vscode-datapack-helper-plus/wiki/Semantic-Coloring

所有命令参数都可以被语义化高亮。我们同时建议您安装 
[Arcensoth](https://github.com/Arcensotj) 的 [language-mcfunction extension](https://github.com/Arcensoth/language-mcfunction)
插件以获得实时的颜色反馈。

![semantic-coloring](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/semantic-coloring.png)

## 签名信息

您可以在敲打命令的过程中得到该命令的签名提示。这些信息通常会在你按下空格后自动显示。

您也可以使用 Ctrl + Shift + 空格手动触发签名信息。

![signature-help](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/signature-help.gif)

## 自动补全

当您敲击了以下任意字符时，大憨批将自动计算补全提示：`[' ', ',', '{', '[', '=', ':', '/', '!', "'", '"', '.', '@']`。此外您也可以使用 Ctrl + 空格快捷键（或其他自行设定的按键）来手动触发自动补全。

大憨批能够提供简单命令的自动补全：
![simple-completions](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/simple-completions.gif)

复杂的 NBT 标签的自动补全（感谢 [Yurihaia](https://github.com/Yurihaia) 维护的 [mc-nbtdoc](https://github.com/Yurihaia/mc-nbtdoc)）：
![nbt-tag-completions](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/nbt-tag-completions.gif)

以及 NBT 路径的自动补全：
![nbt-path-completions](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/nbt-path-completions.gif)

以及 JSON 文本的自动补全：
![text-component-completions](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/text-component-completions.gif)

**甚至能把它们套起来**：
![ohhhhh-completions](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/ohhhhh-completions.gif)

## 代码片段

大憨批提供了一些有用的代码片段。有关代码片段是什么可以参考 [VSCode 的官方文档](https://code.visualstudio.com/docs/editor/userdefinedsnippets)。大憨批与 VSCode 均提供了让你自定义代码片段的功能，并且由于大憨批基于 VSCode，它们定义代码片段的语法也完全一致。对于 mcfunction 函数文件来说，由大憨批添加的代码片段将只会在光标位于命令开头时出现在补全提示的列表中，而由 VSCode 的 `Code/User/snippets/mcfunction.json` 文件添加的代码片段则会在任何情况下都能出现在补全提示中。如果你想用 VSCode 来自定义代码片段，看[他们的官方文档](https://code.visualstudio.com/docs/editor/userdefinedsnippets)；如果你想用大憨批来自定义代码片段，则需要看本文的[配置](#配置)部分.

![code-snippets](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/code-snippets.gif)

## 定义注释

> Wiki: https://github.com/SPGoding/vscode-datapack-helper-plus/wiki/Define-Comment

你可以使用形如 `#define <类型：字符串> <标识符: 字符串> [<描述: 字符串>]` 的格式来定义一个字符串。这些被定义的内容将会参与到补全提示的计算、符号的重命名、查找引用或定义等操作当中。Minecraft 本身会把这些定义注释当作普通的注释并直接忽略掉，只有大憨批会读取这些注释。

![definition-comments](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/definition-comments.png)

## 别名注释

> Wiki: https://github.com/SPGoding/vscode-datapack-helper-plus/wiki/Alias-Comment

你可以使用形如 `#alias <类型：字符串> <别名: 字符串> <值: 字符串>` 的格式来定义一个字符串别名，其将会出现在指定参数的补全列表中。

![alias-comments](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/alias-comments.gif)

## 错误提示与代码操作

> 代码操作的 Wiki：https://github.com/SPGoding/vscode-datapack-helper-plus/wiki/Code-Actions

大憨批能够提供实时的错误提示。它既能像 Minecraft 一样展现语法错误，也能给予你更加详细的警告信息。

有些错误提示还附带代码操作，能够帮你快速修正问题。

![diagnostics](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/diagnostics.gif)

## 格式化与校验

> Wiki：https://github.com/SPGoding/vscode-datapack-helper-plus/wiki/Lint-Rules

您可以通过按下 Shift + Alt + F 或其他自行设定的快捷键来格式化当前文档。

您可以在配置中设置一些格式化与校验的规则，大憨批将给不符合设定的命令进行标注。

![formatting](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/formatting.gif)

## 折叠区域

您可以使用 `#region` 与 `#endregion` 注释来定义折叠区域，使得 mcfunction 文件结构更加清晰。

```mcfunction
#region 这是一吨穷举命令，不穷举你会变得更强？
execute if score @s test matches 1 run say 1
execute if score @s test matches 2 run say 2
execute if score @s test matches 3 run say 3
execute if score @s test matches 4 run say 4
execute if score @s test matches 5 run say 5
#endregion
```

除此之外，您还可以使用不同个数的井号来创建不同层级的折叠区域（不过井号后面需要有至少一个空格）：

```mcfunction
#region 这是一吨穷举命令，不穷举你会变得更强？
# 壹
## 壹・一
execute if score @s foo matches 1 run say 1
execute if score @s foo matches 2 run say 2
## 壹・二
execute if score @s bar matches 1 run say 1
execute if score @s bar matches 2 run say 2
# 贰
execute if score @p test matches 1 run say 1
#endregion
```

![folding-ranges](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/folding-ranges.gif)

## 调用层级

_该特性依赖于 proposed 阶段的 API，只能在开发环境下使用。_

调用层级可以让你很方便地浏览各个函数。你可以获取到一个函数、函数标签、进度的调用者以及被调用者。该特性的默认快捷键为 `Shift + Alt + H`。

![call-hierarchy](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/call-hierarchy.gif)

## 颜色信息

大憨批能够为 `dust` 粒子以及一些 NBT 标签提供颜色信息，这是真正的憨批行为。你可以把光标悬浮在颜色上几秒钟，这样就能直接更改颜色了。

![color-information](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/color-information.gif)

## 悬浮信息

不好意思，没做。

## 解析命名空间 ID

您可以通过按着 Ctrl 左击进度、战利品表、函数、断言以及各种标签的命名空间 ID 来跳转到对应的文件。

![document-link](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/document-link.gif)

## 跳转到定义

您可以通过按着 Ctrl 左击记分项名、实体名、标签名、队伍名、bossbar ID、数据储存 ID 来跳转到对应的定义行数。

![goto-definition](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/goto-definition.gif)

## 查找引用

您可以通过 Shift + F12 快捷键或其他自行设定的按键来查找所有该进度、战利品表、函数、断言、数据包标签、实体、标签、计分项、队伍、bossbar 或数据储存在当前工作区中的所有引用。

![peek-references](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/peek-references.gif)

## 重命名

您可以通过 F2 或其他自行设定的按键来重命名进度、战利品表、函数、断言、数据包标签、实体、标签、队伍、bossbar 或数据储存。

在整个工作区中相应的引用都会被重命名。

**警告**：重命名可能导致您的函数内容损坏，请及时备份。使用风险请自行承担。

![rename-objective](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/rename-objective.gif)

此外，如果您重命名了一个有着文件定义的命名空间 ID（例如进度、战利品表、函数、断言以及各种标签的命名空间 ID），在工作区当中的对应文件也将会被移动或重命名。

![rename-function](https://raw.githubusercontent.com/SPGoding/vscode-datapack-helper-plus/master/img/rename-function.gif)

*然而*，直接手动重命名工作区中的一个文件并*不会*更新它的命名空间 ID，并且可能会导致缓存错误。

## 配置

使用 Ctrl + `,`（或其他绑定的快捷键）来打开 VSCode 的设置页，并搜索 `datapack` 来查看所有由大憨批提供的配置选项。通过修改这些选项，你可以自行添加代码片段、设置格式化与校验偏好，以及修改运行环境的相关信息。这些选项既可以是为当前用户设置的，也可以是为当前工作区设置的。有关修改配置选项的具体内容请查看 [VSCode 的官方文档](https://code.visualstudio.com/docs/getstarted/settings)。

# 贡献者

感谢所有大憨批的贡献者！

## 2.0.0 版本的贡献者

![0.png](https://i.loli.net/2020/04/28/j8LpReVzNW9Cr5g.png)
![1.png](https://i.loli.net/2020/04/28/pfmohyGReE6HP7i.png)

[点此](https://github.com/SPGoding/vscode-datapack-helper-plus/blob/master/contributors/2.0.0.md)查看详细列表。

## 往期版本贡献者

- [1.x.x](https://github.com/SPGoding/vscode-datapack-helper-plus/blob/master/contributors/1.x.x.md)

## 贡献

如果您有意进行贡献，可以[提交漏洞或建议](https://github.com/SPGoding/vscode-datapack-helper-plus/issues/new)、[给我打钱](https://afdian.net/@SPGoding)等。

查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 以获取更多信息。

# 常见问题

## 为什么补全提示卡死了？

这是网络原因。请按 Ctrl + `,` 打开设置界面，搜索 `datapack.env.dataSource`，将其从 `GitHub` 切换至 `码云`。

## 有漏洞/少功能！

请把您的意见、建议、遇到的问题等发布在 [GitHub issues](https://github.com/SPGoding/vscode-datapack-helper-plus/issues/new)，或直接回复在论坛发布帖之下。发布在 GitHub 有利于本人对其进行追踪，发布在论坛有利于我个人给予您相应积分奖励。请**不要**在两处都进行反馈。

## 大憨批真好用！

谢谢。您有很多种对大憨批表示支持的方式。

- 如果您喜欢大憨批的话，这就足够了。
- 如果您的 MCBBS 帐号有权限的话，在本人的论坛发布页评满各项分值，这对本人申请精华有很大帮助；
- 如果您有微软帐号的话，在本人的[插件发布页](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-language-server&ssr=false#review-details)给一个五星好评。
- 如果您有 CBer 朋友的话，把大憨批安利给 TA；
- 如果您有钱的话，本人有一个[爱发电](https://afdian.net/@SPGoding)页面。
