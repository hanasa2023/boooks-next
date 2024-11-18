import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Link } from '@nextui-org/link'

import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <div className="bg-home-bg bg-cover w-full h-full p-6 flex justify-center items-center">
      <Card isBlurred className="w-3/4 max-h-[80vh] p-4">
        <CardHeader className="justify-center">
          <p className="text-4xl text-purple-600">Boooks</p>
        </CardHeader>
        <CardBody className="px-3 py-1 text-secondary-700">
          <p>一个为HEU 15系服务的资源网站。不定期更新……</p>
          <div className="my-2" />
          <p className="text-2xl text-primary-700">📝 更新日志</p>
          <Divider className="my-4" />
          <p className="text-xl">2024/11/18</p>
          <div className="my-2" />
          <ul>
            <li className="list-disc">- ✨ 新增流体力学实验报告写法及要求</li>
          </ul>
          <Divider className="my-4" />
          <p className="text-xl">2024/10/30</p>
          <div className="my-2" />
          <ul>
            <li className="list-disc">- ✨ 实现搜索框功能</li>
            <li className="list-disc">- ✨ 新增工程流体力学书籍</li>
          </ul>
          <Divider className="my-4" />
          <p className="text-xl">2024/10/29</p>
          <div className="my-2" />
          <ul>
            <li className="list-disc">
              - 💄 新增菜单底部链接，搜索框（目前不可用）
            </li>
          </ul>
          <Divider className="my-4" />
          <p className="text-xl">2024/10/28</p>
          <div className="my-2" />
          <ul>
            <li className="list-disc">- 💥 变更后端服务</li>
            <li className="list-disc">- ♻️ 使用next.js + nextui重构前端</li>
            <li className="list-disc">
              - ✨ 支持图片/markdown/pdf/office文档在线预览
            </li>
          </ul>
          <Divider className="my-4" />
          <p className="text-xl">2024/09/22</p>
          <div className="my-2" />
          <ul>
            <li className="list-disc">- 💥 变更后端为Alist</li>
          </ul>
          <Divider className="my-4" />
          <p className="text-xl">2024/09/04</p>
          <div className="my-2" />
          <ul>
            <li className="list-disc">- ✨ 新增管理系统</li>
            <li className="list-disc">- 📝 增添部分书籍</li>
          </ul>
          <Divider className="my-4" />
          <p className="text-xl">2024/08/28</p>
          <div className="my-2" />
          <ul>
            <li className="list-disc">- 🎉 本站正式建成</li>
          </ul>
        </CardBody>
        <CardFooter className="w-full items-center justify-center gap-3">
          <Link isExternal showAnchorIcon href={siteConfig.links.mail}>
            遇到问题？联系所有者
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
