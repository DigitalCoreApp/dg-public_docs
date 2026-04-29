$existing = @{}
Get-ChildItem c:\DigitalCore\docs\content -Recurse -Filter *.mdx | ForEach-Object {
  $rel = '/' + $_.FullName.Replace('c:\DigitalCore\docs\content\', '').Replace('\', '/').Replace('.mdx', '').Replace('/index', '')
  $existing[$rel] = $true
}
$broken = New-Object System.Collections.ArrayList
Get-ChildItem c:\DigitalCore\docs\content -Recurse -Filter *.mdx | ForEach-Object {
  $text = Get-Content $_.FullName -Raw
  $rgx = [regex]'\]\((/[a-z0-9\-/]+)\)'
  foreach ($m in $rgx.Matches($text)) {
    $link = $m.Groups[1].Value.TrimEnd('/')
    if (-not $existing.ContainsKey($link)) {
      [void]$broken.Add("$($_.Name) -> $link")
    }
  }
}
$broken | Sort-Object -Unique
