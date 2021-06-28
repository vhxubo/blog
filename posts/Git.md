# Git [#53](https://github.com/vhxubo/blog/issues/53)

## 创建新分支
> [Git创建新分支并提交到github_荒野雄兵的专栏-CSDN博客_git创建新分支](https://blog.csdn.net/daerzei/article/details/79530418)

```bash
git checkout -b dev
//or git checkout dev
// 查看分支
git branch
// 上传分支
git push origin HEAD -u
```

## tag 和 releases

> 标签是 Git 中的概念，而 releases 则是 Github、码云等源码托管商所提供的更高层的概念。Git 本身是没有 releases 这个概念，只有 tag。两者之间的关系则是，release 基于 tag，为 tag 添加更丰富的信息，一般是编译好的文件。[Git tag 和 GitHub releases - 蓝桥云课](https://www.lanqiao.cn/courses/reports/1379575/)
> https://git-scm.com/book/en/v2/Git-Basics-Tagging

### 新建 tag

```
git tag -a v1.0 -m "comment"
git tag v1.0
git tag -a v1.0 9fceb02
```

### 删除 tag

```
git tag -d v1.0
```
