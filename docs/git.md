### 分支
- 查看分支：`git branch`
- 创建分支：`git branch <name>`
- 切换分支：`git checkout <name>`
- 创建并切换分支：`git checkout -b <name>`
- 合并某分支到当前分支：`git merge <name>`
- 删除分支：`git branch -d <name>`
- 保留合并分支的历史：`git merge --no-ff dev`
- 储存当前工作现场：`git stash`
- 返回之前的工作现场：`git stash pop`(直接返回，不留历史)
    - `git stash apply`：留历史，使用`git stash list`查看
    - `git stash drop`：恢复之后用于删除stash的内容

- 把本地分支`dev`推送到远程：`git push origin dev`
- 创建远程dev分支到本地dev分支：`git checkout -b dev origin/dev`


### 多人协作流程
因此，多人协作的工作模式通常是这样：

1. 首先，可以试图用`git push origin branch-name`推送自己的修改；
2. 如果推送失败，则因为远程分支比你的本地更新，需要先用`git pull`试图合并；
3. 如果合并有冲突，则解决冲突，并在本地提交；
4. 没有冲突或者解决掉冲突后，再用`git push origin branch-name`推送就能成功！
5. 如果`git pull`提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream branch-name origin/branch-name`。
