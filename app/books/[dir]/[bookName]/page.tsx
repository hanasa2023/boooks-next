import Image from 'next/image'

import { getFileType } from '@/utils/utils'

const BookShow = async ({
  params,
}: {
  params: Promise<{ dir: string; bookName: string }>
}) => {
  const { dir, bookName } = await params
  const fileUrl = `https://boooks.oss-cn-shanghai.aliyuncs.com/${dir}/${bookName}`
  const fileType = getFileType(bookName)
  const officeType = ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx']
  const imageType = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'bmp']

  if (fileType === 'pdf') {
    return (
      <div className="flex w-full pb-4 h-full justify-center items-center">
        <iframe
          className="w-4/5 h-full rounded-md"
          src={`https://g.alicdn.com/teambition/pdfviewer/1.2.0/index.html?file=${fileUrl}`}
          title="pdfViewer"
        />
      </div>
    )
  } else if (officeType.includes(fileType)) {
    return (
      <div className="flex w-full pb-4 h-full justify-center items-center">
        <iframe
          className="w-4/5 h-full rounded-md"
          src={`https://view.officeapps.live.com/op/view.aspx?src=${fileUrl}`}
          title="Office File Viewer"
        />
      </div>
    )
  } else if (fileType === 'epub') {
    return (
      <div className="flex w-full pb-4 h-full justify-center items-center">
        <iframe
          className="w-4/5 h-full rounded-md"
          src={`https://alist-org.github.io/static/epub.js/viewer.html?url=${fileUrl}`}
          title="Epub Viewer"
        />
      </div>
    )
  } else if (imageType.includes(fileType)) {
    return (
      <div className="flex w-full pb-4 h-full justify-center items-center">
        <Image alt="image" height={600} src={fileUrl} width={1200} />
      </div>
    )
  }
}

export default BookShow
