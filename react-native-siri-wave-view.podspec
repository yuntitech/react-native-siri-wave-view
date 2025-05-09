require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name           = package['name']
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.source         = { :git => 'https://github.com/yuntitech/react-native-siri-wave-view', :tag => s.version }

  s.requires_arc   = true
  s.platform       = :ios, '8.0'

  s.source_files   = "ios/**/*.{h,m}"

  s.dependency 'React'
  s.dependency 'SCSiriWaveformView'
  s.dependency 'YTSiriWave', '0.1.0'

end