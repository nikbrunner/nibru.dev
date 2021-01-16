let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Documents/dev/repositories/own/nibru.dev-next
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +7 components/Grid.tsx
badd +1 scss/components/_Row.scss
badd +12 components/Nav.tsx
badd +0 /^fugitive:/Users/nibru/Documents/dev/repositories/own/nibru.dev-next/.git/0/components/Nav.tsx
badd +6 lib/breakpoints.ts
badd +1 lib/useViewport.ts
badd +0 pages/components.tsx
badd +2 scss/components/_Grid.scss
argglobal
%argdel
$argadd .
set stal=2
edit pages/components.tsx
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 31 + 159) / 318)
exe 'vert 2resize ' . ((&columns * 286 + 159) / 318)
argglobal
enew
file NERD_tree_2
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
wincmd w
argglobal
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 90 - ((47 * winheight(0) + 29) / 59)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
90
normal! 09|
wincmd w
exe 'vert 1resize ' . ((&columns * 31 + 159) / 318)
exe 'vert 2resize ' . ((&columns * 286 + 159) / 318)
tabedit components/Grid.tsx
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 58 + 31) / 62)
exe 'vert 1resize ' . ((&columns * 31 + 159) / 318)
exe '2resize ' . ((&lines * 58 + 31) / 62)
exe 'vert 2resize ' . ((&columns * 126 + 159) / 318)
exe '3resize ' . ((&lines * 58 + 31) / 62)
exe 'vert 3resize ' . ((&columns * 159 + 159) / 318)
argglobal
enew
file NERD_tree_3
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
wincmd w
argglobal
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 30 - ((29 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
30
normal! 0
wincmd w
argglobal
if bufexists("scss/components/_Grid.scss") | buffer scss/components/_Grid.scss | else | edit scss/components/_Grid.scss | endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 2 - ((1 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
2
normal! 0
wincmd w
exe '1resize ' . ((&lines * 58 + 31) / 62)
exe 'vert 1resize ' . ((&columns * 31 + 159) / 318)
exe '2resize ' . ((&lines * 58 + 31) / 62)
exe 'vert 2resize ' . ((&columns * 126 + 159) / 318)
exe '3resize ' . ((&lines * 58 + 31) / 62)
exe 'vert 3resize ' . ((&columns * 159 + 159) / 318)
tabnext 1
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOF
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
