import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'

function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='w-full'>
            {
                label && <label className='inline-block mb-1 pl-1'>{label} </label>
            }
            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        apiKey='jowmevz93eqth8lmp2fs2v0badh062y8n2a9jd8cwicbw6op'
                        init={{
                            branding: false,
                            height: 500,
                            menubar: true,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}

export default RTE
