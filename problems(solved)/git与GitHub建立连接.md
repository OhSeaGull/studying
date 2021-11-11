# 让git和github关联起来，两者是通过ssh连接的，安全又快速

1、默认在这里查找你的公钥和密钥(若你没有指定特定路径)    C:\Users\\{username}\ .ssh

2、id_rsa是你的私有密钥，id_rsa.pub是公钥，打开文本复制里面的内容，复制到你的github账户setting的ssh

#### 3、**测试ssh key是否成功：**

使用命令“ssh -T git@github.com”，如果出现You’ve successfully authenticated, but GitHub does not provide shell access 。这就表示已成功连上github。

#### **不成功？**

1. 在git的安装目录下找到/etc/ssh/ssh_config文件
2. 把如下内容复制到ssh_config文件的末尾处：并记得保存

> Host github.com
>
> User git
>
> Hostname ssh.github.com
>
> PreferredAuthentications publickey
>
> IdentityFile ~/.ssh/id_rsa
>
> Port 443

4、在github上面创造一个你的库,public是免费的，private是收费的

5、将本地库与远程库互相关联

> $ git remote add origin git@github.com:{githubaccount}/{repositoryname}

origin是仓库的默认名，当你要关联多个远程仓库时就需要自命名了

6、将本地库的内容推到远程库

> $ git push -u orgin master

由于新建的远程仓库是空的，所以要加上-u这个参数，等远程仓库里面有了内容之后，下次再从本地库上传内容的时候只需 **`git push origin master`。**

可以理解为将本地的master推动到origin master上。

---

**注意有坑：** 在上面第5步新建远程仓库的时候如果你勾选了Initialize this repository with a README（就是创建仓库的时候自动给你创建一个README文件），那么到了第7步你将本地仓库内容推送到远程仓库的时候就会报一个failed to push some refs to  [https://github.com/{githubaccount}/{repositoryname}.git](https://github.com/guyibang/TEST2.git)的错。

**原因：** 由于你新创建的那个仓库里面的README文件不在本地仓库目录中，这时我们可以通过 `git pull --rebase origin master` 命令先将内容合并,此时再push就能成功了。

---

7、最后才了个大坑：本地推送了个子模块，结果GitHub上打不开，google了一下子模块，不深究他就行了，现在还用不到他。
