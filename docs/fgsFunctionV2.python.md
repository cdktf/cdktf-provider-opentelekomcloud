# `fgsFunctionV2` Submodule <a name="`fgsFunctionV2` Submodule" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FgsFunctionV2 <a name="FgsFunctionV2" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2 opentelekomcloud_fgs_function_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  memory_size: typing.Union[int, float],
  name: str,
  runtime: str,
  timeout: typing.Union[int, float],
  agency: str = None,
  app: str = None,
  app_agency: str = None,
  code_filename: str = None,
  code_type: str = None,
  code_url: str = None,
  concurrency_num: typing.Union[int, float] = None,
  custom_image: FgsFunctionV2CustomImage = None,
  depend_list: typing.List[str] = None,
  description: str = None,
  dns_list: str = None,
  enable_auth_in_header: bool | IResolvable = None,
  enable_class_isolation: bool | IResolvable = None,
  enable_dynamic_memory: bool | IResolvable = None,
  enable_lts_log: bool | IResolvable = None,
  encrypted_user_data: str = None,
  enterprise_project_id: str = None,
  ephemeral_storage: typing.Union[int, float] = None,
  func_code: str = None,
  func_mounts: IResolvable | typing.List[FgsFunctionV2FuncMounts] = None,
  functiongraph_version: str = None,
  gpu_memory: typing.Union[int, float] = None,
  handler: str = None,
  heartbeat_handler: str = None,
  id: str = None,
  initializer_handler: str = None,
  initializer_timeout: typing.Union[int, float] = None,
  log_group_id: str = None,
  log_group_name: str = None,
  log_topic_id: str = None,
  log_topic_name: str = None,
  lts_custom_tag: typing.Mapping[str] = None,
  max_instance_num: str = None,
  mount_user_group_id: typing.Union[int, float] = None,
  mount_user_id: typing.Union[int, float] = None,
  network_controller: FgsFunctionV2NetworkController = None,
  network_id: str = None,
  peering_cidr: str = None,
  pre_stop_handler: str = None,
  pre_stop_timeout: typing.Union[int, float] = None,
  reserved_instances: IResolvable | typing.List[FgsFunctionV2ReservedInstances] = None,
  restore_hook_handler: str = None,
  restore_hook_timeout: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: FgsFunctionV2Timeouts = None,
  user_data: str = None,
  versions: IResolvable | typing.List[FgsFunctionV2Versions] = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.memorySize">memory_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#memory_size FgsFunctionV2#memory_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#name FgsFunctionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#runtime FgsFunctionV2#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#timeout FgsFunctionV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.agency">agency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#agency FgsFunctionV2#agency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.app">app</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#app FgsFunctionV2#app}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.appAgency">app_agency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#app_agency FgsFunctionV2#app_agency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.codeFilename">code_filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#code_filename FgsFunctionV2#code_filename}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.codeType">code_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#code_type FgsFunctionV2#code_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.codeUrl">code_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#code_url FgsFunctionV2#code_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.concurrencyNum">concurrency_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#concurrency_num FgsFunctionV2#concurrency_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.customImage">custom_image</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a></code> | custom_image block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.dependList">depend_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#depend_list FgsFunctionV2#depend_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#description FgsFunctionV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.dnsList">dns_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#dns_list FgsFunctionV2#dns_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.enableAuthInHeader">enable_auth_in_header</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_auth_in_header FgsFunctionV2#enable_auth_in_header}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.enableClassIsolation">enable_class_isolation</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_class_isolation FgsFunctionV2#enable_class_isolation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.enableDynamicMemory">enable_dynamic_memory</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_dynamic_memory FgsFunctionV2#enable_dynamic_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.enableLtsLog">enable_lts_log</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_lts_log FgsFunctionV2#enable_lts_log}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.encryptedUserData">encrypted_user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#encrypted_user_data FgsFunctionV2#encrypted_user_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enterprise_project_id FgsFunctionV2#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.ephemeralStorage">ephemeral_storage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#ephemeral_storage FgsFunctionV2#ephemeral_storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.funcCode">func_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#func_code FgsFunctionV2#func_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.funcMounts">func_mounts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>]</code> | func_mounts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.functiongraphVersion">functiongraph_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#functiongraph_version FgsFunctionV2#functiongraph_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.gpuMemory">gpu_memory</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#gpu_memory FgsFunctionV2#gpu_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.handler">handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#handler FgsFunctionV2#handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.heartbeatHandler">heartbeat_handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#heartbeat_handler FgsFunctionV2#heartbeat_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#id FgsFunctionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.initializerHandler">initializer_handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#initializer_handler FgsFunctionV2#initializer_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.initializerTimeout">initializer_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#initializer_timeout FgsFunctionV2#initializer_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_group_id FgsFunctionV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_group_name FgsFunctionV2#log_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.logTopicId">log_topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_topic_id FgsFunctionV2#log_topic_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.logTopicName">log_topic_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_topic_name FgsFunctionV2#log_topic_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.ltsCustomTag">lts_custom_tag</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#lts_custom_tag FgsFunctionV2#lts_custom_tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.maxInstanceNum">max_instance_num</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#max_instance_num FgsFunctionV2#max_instance_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.mountUserGroupId">mount_user_group_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_user_group_id FgsFunctionV2#mount_user_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.mountUserId">mount_user_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_user_id FgsFunctionV2#mount_user_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.networkController">network_controller</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a></code> | network_controller block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#network_id FgsFunctionV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.peeringCidr">peering_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#peering_cidr FgsFunctionV2#peering_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.preStopHandler">pre_stop_handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#pre_stop_handler FgsFunctionV2#pre_stop_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.preStopTimeout">pre_stop_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#pre_stop_timeout FgsFunctionV2#pre_stop_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.reservedInstances">reserved_instances</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>]</code> | reserved_instances block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.restoreHookHandler">restore_hook_handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#restore_hook_handler FgsFunctionV2#restore_hook_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.restoreHookTimeout">restore_hook_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#restore_hook_timeout FgsFunctionV2#restore_hook_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#tags FgsFunctionV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#user_data FgsFunctionV2#user_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.versions">versions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>]</code> | versions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `memory_size`<sup>Required</sup> <a name="memory_size" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.memorySize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#memory_size FgsFunctionV2#memory_size}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.runtime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#runtime FgsFunctionV2#runtime}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#timeout FgsFunctionV2#timeout}.

---

##### `agency`<sup>Optional</sup> <a name="agency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.agency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#agency FgsFunctionV2#agency}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.app"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#app FgsFunctionV2#app}.

---

##### `app_agency`<sup>Optional</sup> <a name="app_agency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.appAgency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#app_agency FgsFunctionV2#app_agency}.

---

##### `code_filename`<sup>Optional</sup> <a name="code_filename" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.codeFilename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#code_filename FgsFunctionV2#code_filename}.

---

##### `code_type`<sup>Optional</sup> <a name="code_type" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.codeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#code_type FgsFunctionV2#code_type}.

---

##### `code_url`<sup>Optional</sup> <a name="code_url" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.codeUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#code_url FgsFunctionV2#code_url}.

---

##### `concurrency_num`<sup>Optional</sup> <a name="concurrency_num" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.concurrencyNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#concurrency_num FgsFunctionV2#concurrency_num}.

---

##### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.customImage"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a>

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#custom_image FgsFunctionV2#custom_image}

---

##### `depend_list`<sup>Optional</sup> <a name="depend_list" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.dependList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#depend_list FgsFunctionV2#depend_list}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#description FgsFunctionV2#description}.

---

##### `dns_list`<sup>Optional</sup> <a name="dns_list" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.dnsList"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#dns_list FgsFunctionV2#dns_list}.

---

##### `enable_auth_in_header`<sup>Optional</sup> <a name="enable_auth_in_header" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.enableAuthInHeader"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_auth_in_header FgsFunctionV2#enable_auth_in_header}.

---

##### `enable_class_isolation`<sup>Optional</sup> <a name="enable_class_isolation" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.enableClassIsolation"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_class_isolation FgsFunctionV2#enable_class_isolation}.

---

##### `enable_dynamic_memory`<sup>Optional</sup> <a name="enable_dynamic_memory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.enableDynamicMemory"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_dynamic_memory FgsFunctionV2#enable_dynamic_memory}.

---

##### `enable_lts_log`<sup>Optional</sup> <a name="enable_lts_log" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.enableLtsLog"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_lts_log FgsFunctionV2#enable_lts_log}.

---

##### `encrypted_user_data`<sup>Optional</sup> <a name="encrypted_user_data" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.encryptedUserData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#encrypted_user_data FgsFunctionV2#encrypted_user_data}.

---

##### `enterprise_project_id`<sup>Optional</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.enterpriseProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enterprise_project_id FgsFunctionV2#enterprise_project_id}.

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.ephemeralStorage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#ephemeral_storage FgsFunctionV2#ephemeral_storage}.

---

##### `func_code`<sup>Optional</sup> <a name="func_code" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.funcCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#func_code FgsFunctionV2#func_code}.

---

##### `func_mounts`<sup>Optional</sup> <a name="func_mounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.funcMounts"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>]

func_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#func_mounts FgsFunctionV2#func_mounts}

---

##### `functiongraph_version`<sup>Optional</sup> <a name="functiongraph_version" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.functiongraphVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#functiongraph_version FgsFunctionV2#functiongraph_version}.

---

##### `gpu_memory`<sup>Optional</sup> <a name="gpu_memory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.gpuMemory"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#gpu_memory FgsFunctionV2#gpu_memory}.

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.handler"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#handler FgsFunctionV2#handler}.

---

##### `heartbeat_handler`<sup>Optional</sup> <a name="heartbeat_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.heartbeatHandler"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#heartbeat_handler FgsFunctionV2#heartbeat_handler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#id FgsFunctionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initializer_handler`<sup>Optional</sup> <a name="initializer_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.initializerHandler"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#initializer_handler FgsFunctionV2#initializer_handler}.

---

##### `initializer_timeout`<sup>Optional</sup> <a name="initializer_timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.initializerTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#initializer_timeout FgsFunctionV2#initializer_timeout}.

---

##### `log_group_id`<sup>Optional</sup> <a name="log_group_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.logGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_group_id FgsFunctionV2#log_group_id}.

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.logGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_group_name FgsFunctionV2#log_group_name}.

---

##### `log_topic_id`<sup>Optional</sup> <a name="log_topic_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.logTopicId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_topic_id FgsFunctionV2#log_topic_id}.

---

##### `log_topic_name`<sup>Optional</sup> <a name="log_topic_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.logTopicName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_topic_name FgsFunctionV2#log_topic_name}.

---

##### `lts_custom_tag`<sup>Optional</sup> <a name="lts_custom_tag" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.ltsCustomTag"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#lts_custom_tag FgsFunctionV2#lts_custom_tag}.

---

##### `max_instance_num`<sup>Optional</sup> <a name="max_instance_num" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.maxInstanceNum"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#max_instance_num FgsFunctionV2#max_instance_num}.

---

##### `mount_user_group_id`<sup>Optional</sup> <a name="mount_user_group_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.mountUserGroupId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_user_group_id FgsFunctionV2#mount_user_group_id}.

---

##### `mount_user_id`<sup>Optional</sup> <a name="mount_user_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.mountUserId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_user_id FgsFunctionV2#mount_user_id}.

---

##### `network_controller`<sup>Optional</sup> <a name="network_controller" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.networkController"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a>

network_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#network_controller FgsFunctionV2#network_controller}

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.networkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#network_id FgsFunctionV2#network_id}.

---

##### `peering_cidr`<sup>Optional</sup> <a name="peering_cidr" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.peeringCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#peering_cidr FgsFunctionV2#peering_cidr}.

---

##### `pre_stop_handler`<sup>Optional</sup> <a name="pre_stop_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.preStopHandler"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#pre_stop_handler FgsFunctionV2#pre_stop_handler}.

---

##### `pre_stop_timeout`<sup>Optional</sup> <a name="pre_stop_timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.preStopTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#pre_stop_timeout FgsFunctionV2#pre_stop_timeout}.

---

##### `reserved_instances`<sup>Optional</sup> <a name="reserved_instances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.reservedInstances"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>]

reserved_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#reserved_instances FgsFunctionV2#reserved_instances}

---

##### `restore_hook_handler`<sup>Optional</sup> <a name="restore_hook_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.restoreHookHandler"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#restore_hook_handler FgsFunctionV2#restore_hook_handler}.

---

##### `restore_hook_timeout`<sup>Optional</sup> <a name="restore_hook_timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.restoreHookTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#restore_hook_timeout FgsFunctionV2#restore_hook_timeout}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#tags FgsFunctionV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#timeouts FgsFunctionV2#timeouts}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#user_data FgsFunctionV2#user_data}.

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.versions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#versions FgsFunctionV2#versions}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage">put_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putFuncMounts">put_func_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putNetworkController">put_network_controller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putReservedInstances">put_reserved_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putVersions">put_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetAgency">reset_agency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetApp">reset_app</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetAppAgency">reset_app_agency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeFilename">reset_code_filename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeType">reset_code_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeUrl">reset_code_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetConcurrencyNum">reset_concurrency_num</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCustomImage">reset_custom_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDependList">reset_depend_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDnsList">reset_dns_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableAuthInHeader">reset_enable_auth_in_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableClassIsolation">reset_enable_class_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableDynamicMemory">reset_enable_dynamic_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableLtsLog">reset_enable_lts_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEncryptedUserData">reset_encrypted_user_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnterpriseProjectId">reset_enterprise_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEphemeralStorage">reset_ephemeral_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFuncCode">reset_func_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFuncMounts">reset_func_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFunctiongraphVersion">reset_functiongraph_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetGpuMemory">reset_gpu_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetHandler">reset_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetHeartbeatHandler">reset_heartbeat_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetInitializerHandler">reset_initializer_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetInitializerTimeout">reset_initializer_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogGroupId">reset_log_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogGroupName">reset_log_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogTopicId">reset_log_topic_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogTopicName">reset_log_topic_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLtsCustomTag">reset_lts_custom_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMaxInstanceNum">reset_max_instance_num</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMountUserGroupId">reset_mount_user_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMountUserId">reset_mount_user_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetNetworkController">reset_network_controller</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetNetworkId">reset_network_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPeeringCidr">reset_peering_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPreStopHandler">reset_pre_stop_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPreStopTimeout">reset_pre_stop_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetReservedInstances">reset_reserved_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetRestoreHookHandler">reset_restore_hook_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetRestoreHookTimeout">reset_restore_hook_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetVersions">reset_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_image` <a name="put_custom_image" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage"></a>

```python
def put_custom_image(
  url: str,
  args: str = None,
  command: str = None,
  user_group_id: str = None,
  user_id: str = None,
  working_dir: str = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#url FgsFunctionV2#url}.

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage.parameter.args"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#args FgsFunctionV2#args}.

---

###### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage.parameter.command"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#command FgsFunctionV2#command}.

---

###### `user_group_id`<sup>Optional</sup> <a name="user_group_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage.parameter.userGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#user_group_id FgsFunctionV2#user_group_id}.

---

###### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#user_id FgsFunctionV2#user_id}.

---

###### `working_dir`<sup>Optional</sup> <a name="working_dir" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putCustomImage.parameter.workingDir"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#working_dir FgsFunctionV2#working_dir}.

---

##### `put_func_mounts` <a name="put_func_mounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putFuncMounts"></a>

```python
def put_func_mounts(
  value: IResolvable | typing.List[FgsFunctionV2FuncMounts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putFuncMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>]

---

##### `put_network_controller` <a name="put_network_controller" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putNetworkController"></a>

```python
def put_network_controller(
  disable_public_network: bool | IResolvable = None,
  trigger_access_vpcs: IResolvable | typing.List[FgsFunctionV2NetworkControllerTriggerAccessVpcs] = None
) -> None
```

###### `disable_public_network`<sup>Optional</sup> <a name="disable_public_network" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putNetworkController.parameter.disablePublicNetwork"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#disable_public_network FgsFunctionV2#disable_public_network}.

---

###### `trigger_access_vpcs`<sup>Optional</sup> <a name="trigger_access_vpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putNetworkController.parameter.triggerAccessVpcs"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>]

trigger_access_vpcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#trigger_access_vpcs FgsFunctionV2#trigger_access_vpcs}

---

##### `put_reserved_instances` <a name="put_reserved_instances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putReservedInstances"></a>

```python
def put_reserved_instances(
  value: IResolvable | typing.List[FgsFunctionV2ReservedInstances]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putReservedInstances.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#create FgsFunctionV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#delete FgsFunctionV2#delete}.

---

##### `put_versions` <a name="put_versions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putVersions"></a>

```python
def put_versions(
  value: IResolvable | typing.List[FgsFunctionV2Versions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.putVersions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>]

---

##### `reset_agency` <a name="reset_agency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetAgency"></a>

```python
def reset_agency() -> None
```

##### `reset_app` <a name="reset_app" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetApp"></a>

```python
def reset_app() -> None
```

##### `reset_app_agency` <a name="reset_app_agency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetAppAgency"></a>

```python
def reset_app_agency() -> None
```

##### `reset_code_filename` <a name="reset_code_filename" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeFilename"></a>

```python
def reset_code_filename() -> None
```

##### `reset_code_type` <a name="reset_code_type" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeType"></a>

```python
def reset_code_type() -> None
```

##### `reset_code_url` <a name="reset_code_url" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCodeUrl"></a>

```python
def reset_code_url() -> None
```

##### `reset_concurrency_num` <a name="reset_concurrency_num" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetConcurrencyNum"></a>

```python
def reset_concurrency_num() -> None
```

##### `reset_custom_image` <a name="reset_custom_image" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetCustomImage"></a>

```python
def reset_custom_image() -> None
```

##### `reset_depend_list` <a name="reset_depend_list" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDependList"></a>

```python
def reset_depend_list() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dns_list` <a name="reset_dns_list" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetDnsList"></a>

```python
def reset_dns_list() -> None
```

##### `reset_enable_auth_in_header` <a name="reset_enable_auth_in_header" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableAuthInHeader"></a>

```python
def reset_enable_auth_in_header() -> None
```

##### `reset_enable_class_isolation` <a name="reset_enable_class_isolation" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableClassIsolation"></a>

```python
def reset_enable_class_isolation() -> None
```

##### `reset_enable_dynamic_memory` <a name="reset_enable_dynamic_memory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableDynamicMemory"></a>

```python
def reset_enable_dynamic_memory() -> None
```

##### `reset_enable_lts_log` <a name="reset_enable_lts_log" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnableLtsLog"></a>

```python
def reset_enable_lts_log() -> None
```

##### `reset_encrypted_user_data` <a name="reset_encrypted_user_data" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEncryptedUserData"></a>

```python
def reset_encrypted_user_data() -> None
```

##### `reset_enterprise_project_id` <a name="reset_enterprise_project_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEnterpriseProjectId"></a>

```python
def reset_enterprise_project_id() -> None
```

##### `reset_ephemeral_storage` <a name="reset_ephemeral_storage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetEphemeralStorage"></a>

```python
def reset_ephemeral_storage() -> None
```

##### `reset_func_code` <a name="reset_func_code" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFuncCode"></a>

```python
def reset_func_code() -> None
```

##### `reset_func_mounts` <a name="reset_func_mounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFuncMounts"></a>

```python
def reset_func_mounts() -> None
```

##### `reset_functiongraph_version` <a name="reset_functiongraph_version" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetFunctiongraphVersion"></a>

```python
def reset_functiongraph_version() -> None
```

##### `reset_gpu_memory` <a name="reset_gpu_memory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetGpuMemory"></a>

```python
def reset_gpu_memory() -> None
```

##### `reset_handler` <a name="reset_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetHandler"></a>

```python
def reset_handler() -> None
```

##### `reset_heartbeat_handler` <a name="reset_heartbeat_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetHeartbeatHandler"></a>

```python
def reset_heartbeat_handler() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initializer_handler` <a name="reset_initializer_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetInitializerHandler"></a>

```python
def reset_initializer_handler() -> None
```

##### `reset_initializer_timeout` <a name="reset_initializer_timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetInitializerTimeout"></a>

```python
def reset_initializer_timeout() -> None
```

##### `reset_log_group_id` <a name="reset_log_group_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogGroupId"></a>

```python
def reset_log_group_id() -> None
```

##### `reset_log_group_name` <a name="reset_log_group_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogGroupName"></a>

```python
def reset_log_group_name() -> None
```

##### `reset_log_topic_id` <a name="reset_log_topic_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogTopicId"></a>

```python
def reset_log_topic_id() -> None
```

##### `reset_log_topic_name` <a name="reset_log_topic_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLogTopicName"></a>

```python
def reset_log_topic_name() -> None
```

##### `reset_lts_custom_tag` <a name="reset_lts_custom_tag" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetLtsCustomTag"></a>

```python
def reset_lts_custom_tag() -> None
```

##### `reset_max_instance_num` <a name="reset_max_instance_num" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMaxInstanceNum"></a>

```python
def reset_max_instance_num() -> None
```

##### `reset_mount_user_group_id` <a name="reset_mount_user_group_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMountUserGroupId"></a>

```python
def reset_mount_user_group_id() -> None
```

##### `reset_mount_user_id` <a name="reset_mount_user_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetMountUserId"></a>

```python
def reset_mount_user_id() -> None
```

##### `reset_network_controller` <a name="reset_network_controller" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetNetworkController"></a>

```python
def reset_network_controller() -> None
```

##### `reset_network_id` <a name="reset_network_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetNetworkId"></a>

```python
def reset_network_id() -> None
```

##### `reset_peering_cidr` <a name="reset_peering_cidr" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPeeringCidr"></a>

```python
def reset_peering_cidr() -> None
```

##### `reset_pre_stop_handler` <a name="reset_pre_stop_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPreStopHandler"></a>

```python
def reset_pre_stop_handler() -> None
```

##### `reset_pre_stop_timeout` <a name="reset_pre_stop_timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetPreStopTimeout"></a>

```python
def reset_pre_stop_timeout() -> None
```

##### `reset_reserved_instances` <a name="reset_reserved_instances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetReservedInstances"></a>

```python
def reset_reserved_instances() -> None
```

##### `reset_restore_hook_handler` <a name="reset_restore_hook_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetRestoreHookHandler"></a>

```python
def reset_restore_hook_handler() -> None
```

##### `reset_restore_hook_timeout` <a name="reset_restore_hook_timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetRestoreHookTimeout"></a>

```python
def reset_restore_hook_timeout() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_versions` <a name="reset_versions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetVersions"></a>

```python
def reset_versions() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FgsFunctionV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FgsFunctionV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FgsFunctionV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FgsFunctionV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FgsFunctionV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.allowEphemeralStorage">allow_ephemeral_storage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.apigRouteEnable">apig_route_enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.customImage">custom_image</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference">FgsFunctionV2CustomImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.extendConfig">extend_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcMounts">func_mounts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList">FgsFunctionV2FuncMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuType">gpu_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.isStatefulFunction">is_stateful_function</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkController">network_controller</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference">FgsFunctionV2NetworkControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.reservedInstances">reserved_instances</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList">FgsFunctionV2ReservedInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference">FgsFunctionV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.urn">urn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList">FgsFunctionV2VersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.agencyInput">agency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appAgencyInput">app_agency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeFilenameInput">code_filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeTypeInput">code_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeUrlInput">code_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.concurrencyNumInput">concurrency_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.customImageInput">custom_image_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependListInput">depend_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dnsListInput">dns_list_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableAuthInHeaderInput">enable_auth_in_header_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableClassIsolationInput">enable_class_isolation_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableDynamicMemoryInput">enable_dynamic_memory_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableLtsLogInput">enable_lts_log_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.encryptedUserDataInput">encrypted_user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enterpriseProjectIdInput">enterprise_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ephemeralStorageInput">ephemeral_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcCodeInput">func_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcMountsInput">func_mounts_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.functiongraphVersionInput">functiongraph_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuMemoryInput">gpu_memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.handlerInput">handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.heartbeatHandlerInput">heartbeat_handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerHandlerInput">initializer_handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerTimeoutInput">initializer_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupIdInput">log_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicIdInput">log_topic_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicNameInput">log_topic_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ltsCustomTagInput">lts_custom_tag_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.maxInstanceNumInput">max_instance_num_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.memorySizeInput">memory_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserGroupIdInput">mount_user_group_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserIdInput">mount_user_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkControllerInput">network_controller_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkIdInput">network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.peeringCidrInput">peering_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopHandlerInput">pre_stop_handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopTimeoutInput">pre_stop_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.reservedInstancesInput">reserved_instances_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookHandlerInput">restore_hook_handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookTimeoutInput">restore_hook_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.versionsInput">versions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.agency">agency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appAgency">app_agency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeFilename">code_filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeType">code_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeUrl">code_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.concurrencyNum">concurrency_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependList">depend_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dnsList">dns_list</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableAuthInHeader">enable_auth_in_header</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableClassIsolation">enable_class_isolation</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableDynamicMemory">enable_dynamic_memory</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableLtsLog">enable_lts_log</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.encryptedUserData">encrypted_user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ephemeralStorage">ephemeral_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcCode">func_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.functiongraphVersion">functiongraph_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuMemory">gpu_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.handler">handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.heartbeatHandler">heartbeat_handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerHandler">initializer_handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerTimeout">initializer_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicId">log_topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicName">log_topic_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ltsCustomTag">lts_custom_tag</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.maxInstanceNum">max_instance_num</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.memorySize">memory_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserGroupId">mount_user_group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserId">mount_user_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkId">network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.peeringCidr">peering_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopHandler">pre_stop_handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopTimeout">pre_stop_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookHandler">restore_hook_handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookTimeout">restore_hook_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `allow_ephemeral_storage`<sup>Required</sup> <a name="allow_ephemeral_storage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.allowEphemeralStorage"></a>

```python
allow_ephemeral_storage: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `apig_route_enable`<sup>Required</sup> <a name="apig_route_enable" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.apigRouteEnable"></a>

```python
apig_route_enable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `custom_image`<sup>Required</sup> <a name="custom_image" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.customImage"></a>

```python
custom_image: FgsFunctionV2CustomImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference">FgsFunctionV2CustomImageOutputReference</a>

---

##### `extend_config`<sup>Required</sup> <a name="extend_config" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.extendConfig"></a>

```python
extend_config: str
```

- *Type:* str

---

##### `func_mounts`<sup>Required</sup> <a name="func_mounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcMounts"></a>

```python
func_mounts: FgsFunctionV2FuncMountsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList">FgsFunctionV2FuncMountsList</a>

---

##### `gpu_type`<sup>Required</sup> <a name="gpu_type" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuType"></a>

```python
gpu_type: str
```

- *Type:* str

---

##### `is_stateful_function`<sup>Required</sup> <a name="is_stateful_function" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.isStatefulFunction"></a>

```python
is_stateful_function: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `network_controller`<sup>Required</sup> <a name="network_controller" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkController"></a>

```python
network_controller: FgsFunctionV2NetworkControllerOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference">FgsFunctionV2NetworkControllerOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `reserved_instances`<sup>Required</sup> <a name="reserved_instances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.reservedInstances"></a>

```python
reserved_instances: FgsFunctionV2ReservedInstancesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList">FgsFunctionV2ReservedInstancesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeouts"></a>

```python
timeouts: FgsFunctionV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference">FgsFunctionV2TimeoutsOutputReference</a>

---

##### `urn`<sup>Required</sup> <a name="urn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.urn"></a>

```python
urn: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.versions"></a>

```python
versions: FgsFunctionV2VersionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList">FgsFunctionV2VersionsList</a>

---

##### `agency_input`<sup>Optional</sup> <a name="agency_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.agencyInput"></a>

```python
agency_input: str
```

- *Type:* str

---

##### `app_agency_input`<sup>Optional</sup> <a name="app_agency_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appAgencyInput"></a>

```python
app_agency_input: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `code_filename_input`<sup>Optional</sup> <a name="code_filename_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeFilenameInput"></a>

```python
code_filename_input: str
```

- *Type:* str

---

##### `code_type_input`<sup>Optional</sup> <a name="code_type_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeTypeInput"></a>

```python
code_type_input: str
```

- *Type:* str

---

##### `code_url_input`<sup>Optional</sup> <a name="code_url_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeUrlInput"></a>

```python
code_url_input: str
```

- *Type:* str

---

##### `concurrency_num_input`<sup>Optional</sup> <a name="concurrency_num_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.concurrencyNumInput"></a>

```python
concurrency_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_image_input`<sup>Optional</sup> <a name="custom_image_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.customImageInput"></a>

```python
custom_image_input: FgsFunctionV2CustomImage
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a>

---

##### `depend_list_input`<sup>Optional</sup> <a name="depend_list_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependListInput"></a>

```python
depend_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_list_input`<sup>Optional</sup> <a name="dns_list_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dnsListInput"></a>

```python
dns_list_input: str
```

- *Type:* str

---

##### `enable_auth_in_header_input`<sup>Optional</sup> <a name="enable_auth_in_header_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableAuthInHeaderInput"></a>

```python
enable_auth_in_header_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_class_isolation_input`<sup>Optional</sup> <a name="enable_class_isolation_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableClassIsolationInput"></a>

```python
enable_class_isolation_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_dynamic_memory_input`<sup>Optional</sup> <a name="enable_dynamic_memory_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableDynamicMemoryInput"></a>

```python
enable_dynamic_memory_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_lts_log_input`<sup>Optional</sup> <a name="enable_lts_log_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableLtsLogInput"></a>

```python
enable_lts_log_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `encrypted_user_data_input`<sup>Optional</sup> <a name="encrypted_user_data_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.encryptedUserDataInput"></a>

```python
encrypted_user_data_input: str
```

- *Type:* str

---

##### `enterprise_project_id_input`<sup>Optional</sup> <a name="enterprise_project_id_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enterpriseProjectIdInput"></a>

```python
enterprise_project_id_input: str
```

- *Type:* str

---

##### `ephemeral_storage_input`<sup>Optional</sup> <a name="ephemeral_storage_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ephemeralStorageInput"></a>

```python
ephemeral_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `func_code_input`<sup>Optional</sup> <a name="func_code_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcCodeInput"></a>

```python
func_code_input: str
```

- *Type:* str

---

##### `func_mounts_input`<sup>Optional</sup> <a name="func_mounts_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcMountsInput"></a>

```python
func_mounts_input: IResolvable | typing.List[FgsFunctionV2FuncMounts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>]

---

##### `functiongraph_version_input`<sup>Optional</sup> <a name="functiongraph_version_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.functiongraphVersionInput"></a>

```python
functiongraph_version_input: str
```

- *Type:* str

---

##### `gpu_memory_input`<sup>Optional</sup> <a name="gpu_memory_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuMemoryInput"></a>

```python
gpu_memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `handler_input`<sup>Optional</sup> <a name="handler_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.handlerInput"></a>

```python
handler_input: str
```

- *Type:* str

---

##### `heartbeat_handler_input`<sup>Optional</sup> <a name="heartbeat_handler_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.heartbeatHandlerInput"></a>

```python
heartbeat_handler_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initializer_handler_input`<sup>Optional</sup> <a name="initializer_handler_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerHandlerInput"></a>

```python
initializer_handler_input: str
```

- *Type:* str

---

##### `initializer_timeout_input`<sup>Optional</sup> <a name="initializer_timeout_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerTimeoutInput"></a>

```python
initializer_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_group_id_input`<sup>Optional</sup> <a name="log_group_id_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupIdInput"></a>

```python
log_group_id_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `log_topic_id_input`<sup>Optional</sup> <a name="log_topic_id_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicIdInput"></a>

```python
log_topic_id_input: str
```

- *Type:* str

---

##### `log_topic_name_input`<sup>Optional</sup> <a name="log_topic_name_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicNameInput"></a>

```python
log_topic_name_input: str
```

- *Type:* str

---

##### `lts_custom_tag_input`<sup>Optional</sup> <a name="lts_custom_tag_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ltsCustomTagInput"></a>

```python
lts_custom_tag_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_instance_num_input`<sup>Optional</sup> <a name="max_instance_num_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.maxInstanceNumInput"></a>

```python
max_instance_num_input: str
```

- *Type:* str

---

##### `memory_size_input`<sup>Optional</sup> <a name="memory_size_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.memorySizeInput"></a>

```python
memory_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_user_group_id_input`<sup>Optional</sup> <a name="mount_user_group_id_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserGroupIdInput"></a>

```python
mount_user_group_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_user_id_input`<sup>Optional</sup> <a name="mount_user_id_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserIdInput"></a>

```python
mount_user_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_controller_input`<sup>Optional</sup> <a name="network_controller_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkControllerInput"></a>

```python
network_controller_input: FgsFunctionV2NetworkController
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a>

---

##### `network_id_input`<sup>Optional</sup> <a name="network_id_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkIdInput"></a>

```python
network_id_input: str
```

- *Type:* str

---

##### `peering_cidr_input`<sup>Optional</sup> <a name="peering_cidr_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.peeringCidrInput"></a>

```python
peering_cidr_input: str
```

- *Type:* str

---

##### `pre_stop_handler_input`<sup>Optional</sup> <a name="pre_stop_handler_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopHandlerInput"></a>

```python
pre_stop_handler_input: str
```

- *Type:* str

---

##### `pre_stop_timeout_input`<sup>Optional</sup> <a name="pre_stop_timeout_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopTimeoutInput"></a>

```python
pre_stop_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reserved_instances_input`<sup>Optional</sup> <a name="reserved_instances_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.reservedInstancesInput"></a>

```python
reserved_instances_input: IResolvable | typing.List[FgsFunctionV2ReservedInstances]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>]

---

##### `restore_hook_handler_input`<sup>Optional</sup> <a name="restore_hook_handler_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookHandlerInput"></a>

```python
restore_hook_handler_input: str
```

- *Type:* str

---

##### `restore_hook_timeout_input`<sup>Optional</sup> <a name="restore_hook_timeout_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookTimeoutInput"></a>

```python
restore_hook_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FgsFunctionV2Timeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a>

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `versions_input`<sup>Optional</sup> <a name="versions_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.versionsInput"></a>

```python
versions_input: IResolvable | typing.List[FgsFunctionV2Versions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `agency`<sup>Required</sup> <a name="agency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.agency"></a>

```python
agency: str
```

- *Type:* str

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `app_agency`<sup>Required</sup> <a name="app_agency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.appAgency"></a>

```python
app_agency: str
```

- *Type:* str

---

##### `code_filename`<sup>Required</sup> <a name="code_filename" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeFilename"></a>

```python
code_filename: str
```

- *Type:* str

---

##### `code_type`<sup>Required</sup> <a name="code_type" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeType"></a>

```python
code_type: str
```

- *Type:* str

---

##### `code_url`<sup>Required</sup> <a name="code_url" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.codeUrl"></a>

```python
code_url: str
```

- *Type:* str

---

##### `concurrency_num`<sup>Required</sup> <a name="concurrency_num" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.concurrencyNum"></a>

```python
concurrency_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depend_list`<sup>Required</sup> <a name="depend_list" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dependList"></a>

```python
depend_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_list`<sup>Required</sup> <a name="dns_list" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.dnsList"></a>

```python
dns_list: str
```

- *Type:* str

---

##### `enable_auth_in_header`<sup>Required</sup> <a name="enable_auth_in_header" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableAuthInHeader"></a>

```python
enable_auth_in_header: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_class_isolation`<sup>Required</sup> <a name="enable_class_isolation" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableClassIsolation"></a>

```python
enable_class_isolation: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_dynamic_memory`<sup>Required</sup> <a name="enable_dynamic_memory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableDynamicMemory"></a>

```python
enable_dynamic_memory: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_lts_log`<sup>Required</sup> <a name="enable_lts_log" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enableLtsLog"></a>

```python
enable_lts_log: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `encrypted_user_data`<sup>Required</sup> <a name="encrypted_user_data" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.encryptedUserData"></a>

```python
encrypted_user_data: str
```

- *Type:* str

---

##### `enterprise_project_id`<sup>Required</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.enterpriseProjectId"></a>

```python
enterprise_project_id: str
```

- *Type:* str

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ephemeralStorage"></a>

```python
ephemeral_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `func_code`<sup>Required</sup> <a name="func_code" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.funcCode"></a>

```python
func_code: str
```

- *Type:* str

---

##### `functiongraph_version`<sup>Required</sup> <a name="functiongraph_version" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.functiongraphVersion"></a>

```python
functiongraph_version: str
```

- *Type:* str

---

##### `gpu_memory`<sup>Required</sup> <a name="gpu_memory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.gpuMemory"></a>

```python
gpu_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.handler"></a>

```python
handler: str
```

- *Type:* str

---

##### `heartbeat_handler`<sup>Required</sup> <a name="heartbeat_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.heartbeatHandler"></a>

```python
heartbeat_handler: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initializer_handler`<sup>Required</sup> <a name="initializer_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerHandler"></a>

```python
initializer_handler: str
```

- *Type:* str

---

##### `initializer_timeout`<sup>Required</sup> <a name="initializer_timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.initializerTimeout"></a>

```python
initializer_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `log_topic_id`<sup>Required</sup> <a name="log_topic_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicId"></a>

```python
log_topic_id: str
```

- *Type:* str

---

##### `log_topic_name`<sup>Required</sup> <a name="log_topic_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.logTopicName"></a>

```python
log_topic_name: str
```

- *Type:* str

---

##### `lts_custom_tag`<sup>Required</sup> <a name="lts_custom_tag" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.ltsCustomTag"></a>

```python
lts_custom_tag: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_instance_num`<sup>Required</sup> <a name="max_instance_num" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.maxInstanceNum"></a>

```python
max_instance_num: str
```

- *Type:* str

---

##### `memory_size`<sup>Required</sup> <a name="memory_size" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.memorySize"></a>

```python
memory_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_user_group_id`<sup>Required</sup> <a name="mount_user_group_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserGroupId"></a>

```python
mount_user_group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_user_id`<sup>Required</sup> <a name="mount_user_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.mountUserId"></a>

```python
mount_user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_id`<sup>Required</sup> <a name="network_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

---

##### `peering_cidr`<sup>Required</sup> <a name="peering_cidr" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.peeringCidr"></a>

```python
peering_cidr: str
```

- *Type:* str

---

##### `pre_stop_handler`<sup>Required</sup> <a name="pre_stop_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopHandler"></a>

```python
pre_stop_handler: str
```

- *Type:* str

---

##### `pre_stop_timeout`<sup>Required</sup> <a name="pre_stop_timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.preStopTimeout"></a>

```python
pre_stop_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `restore_hook_handler`<sup>Required</sup> <a name="restore_hook_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookHandler"></a>

```python
restore_hook_handler: str
```

- *Type:* str

---

##### `restore_hook_timeout`<sup>Required</sup> <a name="restore_hook_timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.restoreHookTimeout"></a>

```python
restore_hook_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FgsFunctionV2Config <a name="FgsFunctionV2Config" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  memory_size: typing.Union[int, float],
  name: str,
  runtime: str,
  timeout: typing.Union[int, float],
  agency: str = None,
  app: str = None,
  app_agency: str = None,
  code_filename: str = None,
  code_type: str = None,
  code_url: str = None,
  concurrency_num: typing.Union[int, float] = None,
  custom_image: FgsFunctionV2CustomImage = None,
  depend_list: typing.List[str] = None,
  description: str = None,
  dns_list: str = None,
  enable_auth_in_header: bool | IResolvable = None,
  enable_class_isolation: bool | IResolvable = None,
  enable_dynamic_memory: bool | IResolvable = None,
  enable_lts_log: bool | IResolvable = None,
  encrypted_user_data: str = None,
  enterprise_project_id: str = None,
  ephemeral_storage: typing.Union[int, float] = None,
  func_code: str = None,
  func_mounts: IResolvable | typing.List[FgsFunctionV2FuncMounts] = None,
  functiongraph_version: str = None,
  gpu_memory: typing.Union[int, float] = None,
  handler: str = None,
  heartbeat_handler: str = None,
  id: str = None,
  initializer_handler: str = None,
  initializer_timeout: typing.Union[int, float] = None,
  log_group_id: str = None,
  log_group_name: str = None,
  log_topic_id: str = None,
  log_topic_name: str = None,
  lts_custom_tag: typing.Mapping[str] = None,
  max_instance_num: str = None,
  mount_user_group_id: typing.Union[int, float] = None,
  mount_user_id: typing.Union[int, float] = None,
  network_controller: FgsFunctionV2NetworkController = None,
  network_id: str = None,
  peering_cidr: str = None,
  pre_stop_handler: str = None,
  pre_stop_timeout: typing.Union[int, float] = None,
  reserved_instances: IResolvable | typing.List[FgsFunctionV2ReservedInstances] = None,
  restore_hook_handler: str = None,
  restore_hook_timeout: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: FgsFunctionV2Timeouts = None,
  user_data: str = None,
  versions: IResolvable | typing.List[FgsFunctionV2Versions] = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.memorySize">memory_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#memory_size FgsFunctionV2#memory_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#name FgsFunctionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#runtime FgsFunctionV2#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#timeout FgsFunctionV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.agency">agency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#agency FgsFunctionV2#agency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.app">app</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#app FgsFunctionV2#app}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.appAgency">app_agency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#app_agency FgsFunctionV2#app_agency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeFilename">code_filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#code_filename FgsFunctionV2#code_filename}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeType">code_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#code_type FgsFunctionV2#code_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeUrl">code_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#code_url FgsFunctionV2#code_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.concurrencyNum">concurrency_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#concurrency_num FgsFunctionV2#concurrency_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.customImage">custom_image</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a></code> | custom_image block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dependList">depend_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#depend_list FgsFunctionV2#depend_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#description FgsFunctionV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dnsList">dns_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#dns_list FgsFunctionV2#dns_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableAuthInHeader">enable_auth_in_header</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_auth_in_header FgsFunctionV2#enable_auth_in_header}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableClassIsolation">enable_class_isolation</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_class_isolation FgsFunctionV2#enable_class_isolation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableDynamicMemory">enable_dynamic_memory</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_dynamic_memory FgsFunctionV2#enable_dynamic_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableLtsLog">enable_lts_log</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_lts_log FgsFunctionV2#enable_lts_log}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.encryptedUserData">encrypted_user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#encrypted_user_data FgsFunctionV2#encrypted_user_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enterpriseProjectId">enterprise_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enterprise_project_id FgsFunctionV2#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.ephemeralStorage">ephemeral_storage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#ephemeral_storage FgsFunctionV2#ephemeral_storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.funcCode">func_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#func_code FgsFunctionV2#func_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.funcMounts">func_mounts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>]</code> | func_mounts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.functiongraphVersion">functiongraph_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#functiongraph_version FgsFunctionV2#functiongraph_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.gpuMemory">gpu_memory</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#gpu_memory FgsFunctionV2#gpu_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.handler">handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#handler FgsFunctionV2#handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.heartbeatHandler">heartbeat_handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#heartbeat_handler FgsFunctionV2#heartbeat_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#id FgsFunctionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.initializerHandler">initializer_handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#initializer_handler FgsFunctionV2#initializer_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.initializerTimeout">initializer_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#initializer_timeout FgsFunctionV2#initializer_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_group_id FgsFunctionV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_group_name FgsFunctionV2#log_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logTopicId">log_topic_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_topic_id FgsFunctionV2#log_topic_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logTopicName">log_topic_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_topic_name FgsFunctionV2#log_topic_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.ltsCustomTag">lts_custom_tag</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#lts_custom_tag FgsFunctionV2#lts_custom_tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.maxInstanceNum">max_instance_num</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#max_instance_num FgsFunctionV2#max_instance_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.mountUserGroupId">mount_user_group_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_user_group_id FgsFunctionV2#mount_user_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.mountUserId">mount_user_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_user_id FgsFunctionV2#mount_user_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.networkController">network_controller</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a></code> | network_controller block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.networkId">network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#network_id FgsFunctionV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.peeringCidr">peering_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#peering_cidr FgsFunctionV2#peering_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.preStopHandler">pre_stop_handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#pre_stop_handler FgsFunctionV2#pre_stop_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.preStopTimeout">pre_stop_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#pre_stop_timeout FgsFunctionV2#pre_stop_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.reservedInstances">reserved_instances</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>]</code> | reserved_instances block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.restoreHookHandler">restore_hook_handler</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#restore_hook_handler FgsFunctionV2#restore_hook_handler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.restoreHookTimeout">restore_hook_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#restore_hook_timeout FgsFunctionV2#restore_hook_timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#tags FgsFunctionV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#user_data FgsFunctionV2#user_data}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.versions">versions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>]</code> | versions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `memory_size`<sup>Required</sup> <a name="memory_size" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.memorySize"></a>

```python
memory_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#memory_size FgsFunctionV2#memory_size}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#runtime FgsFunctionV2#runtime}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#timeout FgsFunctionV2#timeout}.

---

##### `agency`<sup>Optional</sup> <a name="agency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.agency"></a>

```python
agency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#agency FgsFunctionV2#agency}.

---

##### `app`<sup>Optional</sup> <a name="app" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.app"></a>

```python
app: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#app FgsFunctionV2#app}.

---

##### `app_agency`<sup>Optional</sup> <a name="app_agency" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.appAgency"></a>

```python
app_agency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#app_agency FgsFunctionV2#app_agency}.

---

##### `code_filename`<sup>Optional</sup> <a name="code_filename" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeFilename"></a>

```python
code_filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#code_filename FgsFunctionV2#code_filename}.

---

##### `code_type`<sup>Optional</sup> <a name="code_type" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeType"></a>

```python
code_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#code_type FgsFunctionV2#code_type}.

---

##### `code_url`<sup>Optional</sup> <a name="code_url" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.codeUrl"></a>

```python
code_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#code_url FgsFunctionV2#code_url}.

---

##### `concurrency_num`<sup>Optional</sup> <a name="concurrency_num" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.concurrencyNum"></a>

```python
concurrency_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#concurrency_num FgsFunctionV2#concurrency_num}.

---

##### `custom_image`<sup>Optional</sup> <a name="custom_image" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.customImage"></a>

```python
custom_image: FgsFunctionV2CustomImage
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a>

custom_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#custom_image FgsFunctionV2#custom_image}

---

##### `depend_list`<sup>Optional</sup> <a name="depend_list" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dependList"></a>

```python
depend_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#depend_list FgsFunctionV2#depend_list}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#description FgsFunctionV2#description}.

---

##### `dns_list`<sup>Optional</sup> <a name="dns_list" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.dnsList"></a>

```python
dns_list: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#dns_list FgsFunctionV2#dns_list}.

---

##### `enable_auth_in_header`<sup>Optional</sup> <a name="enable_auth_in_header" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableAuthInHeader"></a>

```python
enable_auth_in_header: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_auth_in_header FgsFunctionV2#enable_auth_in_header}.

---

##### `enable_class_isolation`<sup>Optional</sup> <a name="enable_class_isolation" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableClassIsolation"></a>

```python
enable_class_isolation: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_class_isolation FgsFunctionV2#enable_class_isolation}.

---

##### `enable_dynamic_memory`<sup>Optional</sup> <a name="enable_dynamic_memory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableDynamicMemory"></a>

```python
enable_dynamic_memory: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_dynamic_memory FgsFunctionV2#enable_dynamic_memory}.

---

##### `enable_lts_log`<sup>Optional</sup> <a name="enable_lts_log" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enableLtsLog"></a>

```python
enable_lts_log: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enable_lts_log FgsFunctionV2#enable_lts_log}.

---

##### `encrypted_user_data`<sup>Optional</sup> <a name="encrypted_user_data" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.encryptedUserData"></a>

```python
encrypted_user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#encrypted_user_data FgsFunctionV2#encrypted_user_data}.

---

##### `enterprise_project_id`<sup>Optional</sup> <a name="enterprise_project_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.enterpriseProjectId"></a>

```python
enterprise_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#enterprise_project_id FgsFunctionV2#enterprise_project_id}.

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.ephemeralStorage"></a>

```python
ephemeral_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#ephemeral_storage FgsFunctionV2#ephemeral_storage}.

---

##### `func_code`<sup>Optional</sup> <a name="func_code" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.funcCode"></a>

```python
func_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#func_code FgsFunctionV2#func_code}.

---

##### `func_mounts`<sup>Optional</sup> <a name="func_mounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.funcMounts"></a>

```python
func_mounts: IResolvable | typing.List[FgsFunctionV2FuncMounts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>]

func_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#func_mounts FgsFunctionV2#func_mounts}

---

##### `functiongraph_version`<sup>Optional</sup> <a name="functiongraph_version" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.functiongraphVersion"></a>

```python
functiongraph_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#functiongraph_version FgsFunctionV2#functiongraph_version}.

---

##### `gpu_memory`<sup>Optional</sup> <a name="gpu_memory" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.gpuMemory"></a>

```python
gpu_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#gpu_memory FgsFunctionV2#gpu_memory}.

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.handler"></a>

```python
handler: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#handler FgsFunctionV2#handler}.

---

##### `heartbeat_handler`<sup>Optional</sup> <a name="heartbeat_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.heartbeatHandler"></a>

```python
heartbeat_handler: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#heartbeat_handler FgsFunctionV2#heartbeat_handler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#id FgsFunctionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initializer_handler`<sup>Optional</sup> <a name="initializer_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.initializerHandler"></a>

```python
initializer_handler: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#initializer_handler FgsFunctionV2#initializer_handler}.

---

##### `initializer_timeout`<sup>Optional</sup> <a name="initializer_timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.initializerTimeout"></a>

```python
initializer_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#initializer_timeout FgsFunctionV2#initializer_timeout}.

---

##### `log_group_id`<sup>Optional</sup> <a name="log_group_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_group_id FgsFunctionV2#log_group_id}.

---

##### `log_group_name`<sup>Optional</sup> <a name="log_group_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_group_name FgsFunctionV2#log_group_name}.

---

##### `log_topic_id`<sup>Optional</sup> <a name="log_topic_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logTopicId"></a>

```python
log_topic_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_topic_id FgsFunctionV2#log_topic_id}.

---

##### `log_topic_name`<sup>Optional</sup> <a name="log_topic_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.logTopicName"></a>

```python
log_topic_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#log_topic_name FgsFunctionV2#log_topic_name}.

---

##### `lts_custom_tag`<sup>Optional</sup> <a name="lts_custom_tag" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.ltsCustomTag"></a>

```python
lts_custom_tag: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#lts_custom_tag FgsFunctionV2#lts_custom_tag}.

---

##### `max_instance_num`<sup>Optional</sup> <a name="max_instance_num" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.maxInstanceNum"></a>

```python
max_instance_num: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#max_instance_num FgsFunctionV2#max_instance_num}.

---

##### `mount_user_group_id`<sup>Optional</sup> <a name="mount_user_group_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.mountUserGroupId"></a>

```python
mount_user_group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_user_group_id FgsFunctionV2#mount_user_group_id}.

---

##### `mount_user_id`<sup>Optional</sup> <a name="mount_user_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.mountUserId"></a>

```python
mount_user_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_user_id FgsFunctionV2#mount_user_id}.

---

##### `network_controller`<sup>Optional</sup> <a name="network_controller" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.networkController"></a>

```python
network_controller: FgsFunctionV2NetworkController
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a>

network_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#network_controller FgsFunctionV2#network_controller}

---

##### `network_id`<sup>Optional</sup> <a name="network_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.networkId"></a>

```python
network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#network_id FgsFunctionV2#network_id}.

---

##### `peering_cidr`<sup>Optional</sup> <a name="peering_cidr" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.peeringCidr"></a>

```python
peering_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#peering_cidr FgsFunctionV2#peering_cidr}.

---

##### `pre_stop_handler`<sup>Optional</sup> <a name="pre_stop_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.preStopHandler"></a>

```python
pre_stop_handler: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#pre_stop_handler FgsFunctionV2#pre_stop_handler}.

---

##### `pre_stop_timeout`<sup>Optional</sup> <a name="pre_stop_timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.preStopTimeout"></a>

```python
pre_stop_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#pre_stop_timeout FgsFunctionV2#pre_stop_timeout}.

---

##### `reserved_instances`<sup>Optional</sup> <a name="reserved_instances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.reservedInstances"></a>

```python
reserved_instances: IResolvable | typing.List[FgsFunctionV2ReservedInstances]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>]

reserved_instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#reserved_instances FgsFunctionV2#reserved_instances}

---

##### `restore_hook_handler`<sup>Optional</sup> <a name="restore_hook_handler" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.restoreHookHandler"></a>

```python
restore_hook_handler: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#restore_hook_handler FgsFunctionV2#restore_hook_handler}.

---

##### `restore_hook_timeout`<sup>Optional</sup> <a name="restore_hook_timeout" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.restoreHookTimeout"></a>

```python
restore_hook_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#restore_hook_timeout FgsFunctionV2#restore_hook_timeout}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#tags FgsFunctionV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.timeouts"></a>

```python
timeouts: FgsFunctionV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#timeouts FgsFunctionV2#timeouts}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#user_data FgsFunctionV2#user_data}.

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.versions"></a>

```python
versions: IResolvable | typing.List[FgsFunctionV2Versions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#versions FgsFunctionV2#versions}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}.

---

### FgsFunctionV2CustomImage <a name="FgsFunctionV2CustomImage" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2CustomImage(
  url: str,
  args: str = None,
  command: str = None,
  user_group_id: str = None,
  user_id: str = None,
  working_dir: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#url FgsFunctionV2#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.args">args</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#args FgsFunctionV2#args}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.command">command</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#command FgsFunctionV2#command}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.userGroupId">user_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#user_group_id FgsFunctionV2#user_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#user_id FgsFunctionV2#user_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.workingDir">working_dir</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#working_dir FgsFunctionV2#working_dir}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#url FgsFunctionV2#url}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.args"></a>

```python
args: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#args FgsFunctionV2#args}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.command"></a>

```python
command: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#command FgsFunctionV2#command}.

---

##### `user_group_id`<sup>Optional</sup> <a name="user_group_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.userGroupId"></a>

```python
user_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#user_group_id FgsFunctionV2#user_group_id}.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#user_id FgsFunctionV2#user_id}.

---

##### `working_dir`<sup>Optional</sup> <a name="working_dir" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#working_dir FgsFunctionV2#working_dir}.

---

### FgsFunctionV2FuncMounts <a name="FgsFunctionV2FuncMounts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2FuncMounts(
  local_mount_path: str,
  mount_resource: str,
  mount_share_path: str,
  mount_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.localMountPath">local_mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#local_mount_path FgsFunctionV2#local_mount_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountResource">mount_resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_resource FgsFunctionV2#mount_resource}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountSharePath">mount_share_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_share_path FgsFunctionV2#mount_share_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountType">mount_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_type FgsFunctionV2#mount_type}. |

---

##### `local_mount_path`<sup>Required</sup> <a name="local_mount_path" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.localMountPath"></a>

```python
local_mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#local_mount_path FgsFunctionV2#local_mount_path}.

---

##### `mount_resource`<sup>Required</sup> <a name="mount_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountResource"></a>

```python
mount_resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_resource FgsFunctionV2#mount_resource}.

---

##### `mount_share_path`<sup>Required</sup> <a name="mount_share_path" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountSharePath"></a>

```python
mount_share_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_share_path FgsFunctionV2#mount_share_path}.

---

##### `mount_type`<sup>Required</sup> <a name="mount_type" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts.property.mountType"></a>

```python
mount_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#mount_type FgsFunctionV2#mount_type}.

---

### FgsFunctionV2NetworkController <a name="FgsFunctionV2NetworkController" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2NetworkController(
  disable_public_network: bool | IResolvable = None,
  trigger_access_vpcs: IResolvable | typing.List[FgsFunctionV2NetworkControllerTriggerAccessVpcs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.property.disablePublicNetwork">disable_public_network</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#disable_public_network FgsFunctionV2#disable_public_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.property.triggerAccessVpcs">trigger_access_vpcs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>]</code> | trigger_access_vpcs block. |

---

##### `disable_public_network`<sup>Optional</sup> <a name="disable_public_network" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.property.disablePublicNetwork"></a>

```python
disable_public_network: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#disable_public_network FgsFunctionV2#disable_public_network}.

---

##### `trigger_access_vpcs`<sup>Optional</sup> <a name="trigger_access_vpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController.property.triggerAccessVpcs"></a>

```python
trigger_access_vpcs: IResolvable | typing.List[FgsFunctionV2NetworkControllerTriggerAccessVpcs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>]

trigger_access_vpcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#trigger_access_vpcs FgsFunctionV2#trigger_access_vpcs}

---

### FgsFunctionV2NetworkControllerTriggerAccessVpcs <a name="FgsFunctionV2NetworkControllerTriggerAccessVpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs(
  vpc_id: str = None,
  vpc_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.property.vpcName">vpc_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#vpc_name FgsFunctionV2#vpc_name}. |

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#vpc_id FgsFunctionV2#vpc_id}.

---

##### `vpc_name`<sup>Optional</sup> <a name="vpc_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs.property.vpcName"></a>

```python
vpc_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#vpc_name FgsFunctionV2#vpc_name}.

---

### FgsFunctionV2ReservedInstances <a name="FgsFunctionV2ReservedInstances" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2ReservedInstances(
  count: typing.Union[int, float],
  qualifier_name: str,
  qualifier_type: str,
  idle_mode: bool | IResolvable = None,
  tactics_config: FgsFunctionV2ReservedInstancesTacticsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#count FgsFunctionV2#count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.qualifierName">qualifier_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#qualifier_name FgsFunctionV2#qualifier_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.qualifierType">qualifier_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#qualifier_type FgsFunctionV2#qualifier_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.idleMode">idle_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#idle_mode FgsFunctionV2#idle_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.tacticsConfig">tactics_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a></code> | tactics_config block. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#count FgsFunctionV2#count}.

---

##### `qualifier_name`<sup>Required</sup> <a name="qualifier_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.qualifierName"></a>

```python
qualifier_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#qualifier_name FgsFunctionV2#qualifier_name}.

---

##### `qualifier_type`<sup>Required</sup> <a name="qualifier_type" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.qualifierType"></a>

```python
qualifier_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#qualifier_type FgsFunctionV2#qualifier_type}.

---

##### `idle_mode`<sup>Optional</sup> <a name="idle_mode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.idleMode"></a>

```python
idle_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#idle_mode FgsFunctionV2#idle_mode}.

---

##### `tactics_config`<sup>Optional</sup> <a name="tactics_config" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances.property.tacticsConfig"></a>

```python
tactics_config: FgsFunctionV2ReservedInstancesTacticsConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a>

tactics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#tactics_config FgsFunctionV2#tactics_config}

---

### FgsFunctionV2ReservedInstancesTacticsConfig <a name="FgsFunctionV2ReservedInstancesTacticsConfig" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig(
  cron_configs: IResolvable | typing.List[FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig.property.cronConfigs">cron_configs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>]</code> | cron_configs block. |

---

##### `cron_configs`<sup>Optional</sup> <a name="cron_configs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig.property.cronConfigs"></a>

```python
cron_configs: IResolvable | typing.List[FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>]

cron_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#cron_configs FgsFunctionV2#cron_configs}

---

### FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs <a name="FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs(
  count: typing.Union[int, float],
  cron: str,
  expired_time: typing.Union[int, float],
  name: str,
  start_time: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#count FgsFunctionV2#count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.cron">cron</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#cron FgsFunctionV2#cron}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.expiredTime">expired_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#expired_time FgsFunctionV2#expired_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#name FgsFunctionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#start_time FgsFunctionV2#start_time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#count FgsFunctionV2#count}.

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.cron"></a>

```python
cron: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#cron FgsFunctionV2#cron}.

---

##### `expired_time`<sup>Required</sup> <a name="expired_time" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.expiredTime"></a>

```python
expired_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#expired_time FgsFunctionV2#expired_time}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#start_time FgsFunctionV2#start_time}.

---

### FgsFunctionV2Timeouts <a name="FgsFunctionV2Timeouts" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#create FgsFunctionV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#delete FgsFunctionV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#create FgsFunctionV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#delete FgsFunctionV2#delete}.

---

### FgsFunctionV2Versions <a name="FgsFunctionV2Versions" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2Versions(
  name: str,
  aliases: FgsFunctionV2VersionsAliases = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#name FgsFunctionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.aliases">aliases</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a></code> | aliases block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#description FgsFunctionV2#description}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.aliases"></a>

```python
aliases: FgsFunctionV2VersionsAliases
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a>

aliases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#aliases FgsFunctionV2#aliases}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#description FgsFunctionV2#description}.

---

### FgsFunctionV2VersionsAliases <a name="FgsFunctionV2VersionsAliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2VersionsAliases(
  name: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#name FgsFunctionV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#description FgsFunctionV2#description}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#description FgsFunctionV2#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### FgsFunctionV2CustomImageOutputReference <a name="FgsFunctionV2CustomImageOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2CustomImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetUserGroupId">reset_user_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetUserId">reset_user_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetWorkingDir">reset_working_dir</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_args` <a name="reset_args" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_user_group_id` <a name="reset_user_group_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetUserGroupId"></a>

```python
def reset_user_group_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetUserId"></a>

```python
def reset_user_id() -> None
```

##### `reset_working_dir` <a name="reset_working_dir" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.resetWorkingDir"></a>

```python
def reset_working_dir() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.argsInput">args_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.commandInput">command_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userGroupIdInput">user_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.workingDirInput">working_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.args">args</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.command">command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userGroupId">user_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.workingDir">working_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.argsInput"></a>

```python
args_input: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.commandInput"></a>

```python
command_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `user_group_id_input`<sup>Optional</sup> <a name="user_group_id_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userGroupIdInput"></a>

```python
user_group_id_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `working_dir_input`<sup>Optional</sup> <a name="working_dir_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.workingDirInput"></a>

```python
working_dir_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.args"></a>

```python
args: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.command"></a>

```python
command: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `user_group_id`<sup>Required</sup> <a name="user_group_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userGroupId"></a>

```python
user_group_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `working_dir`<sup>Required</sup> <a name="working_dir" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImageOutputReference.property.internalValue"></a>

```python
internal_value: FgsFunctionV2CustomImage
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2CustomImage">FgsFunctionV2CustomImage</a>

---


### FgsFunctionV2FuncMountsList <a name="FgsFunctionV2FuncMountsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2FuncMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FgsFunctionV2FuncMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FgsFunctionV2FuncMounts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>]

---


### FgsFunctionV2FuncMountsOutputReference <a name="FgsFunctionV2FuncMountsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.localMountPathInput">local_mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountResourceInput">mount_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountSharePathInput">mount_share_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountTypeInput">mount_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.localMountPath">local_mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountResource">mount_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountSharePath">mount_share_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountType">mount_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_mount_path_input`<sup>Optional</sup> <a name="local_mount_path_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.localMountPathInput"></a>

```python
local_mount_path_input: str
```

- *Type:* str

---

##### `mount_resource_input`<sup>Optional</sup> <a name="mount_resource_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountResourceInput"></a>

```python
mount_resource_input: str
```

- *Type:* str

---

##### `mount_share_path_input`<sup>Optional</sup> <a name="mount_share_path_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountSharePathInput"></a>

```python
mount_share_path_input: str
```

- *Type:* str

---

##### `mount_type_input`<sup>Optional</sup> <a name="mount_type_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountTypeInput"></a>

```python
mount_type_input: str
```

- *Type:* str

---

##### `local_mount_path`<sup>Required</sup> <a name="local_mount_path" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.localMountPath"></a>

```python
local_mount_path: str
```

- *Type:* str

---

##### `mount_resource`<sup>Required</sup> <a name="mount_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountResource"></a>

```python
mount_resource: str
```

- *Type:* str

---

##### `mount_share_path`<sup>Required</sup> <a name="mount_share_path" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountSharePath"></a>

```python
mount_share_path: str
```

- *Type:* str

---

##### `mount_type`<sup>Required</sup> <a name="mount_type" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.mountType"></a>

```python
mount_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMountsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FgsFunctionV2FuncMounts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2FuncMounts">FgsFunctionV2FuncMounts</a>

---


### FgsFunctionV2NetworkControllerOutputReference <a name="FgsFunctionV2NetworkControllerOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.putTriggerAccessVpcs">put_trigger_access_vpcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resetDisablePublicNetwork">reset_disable_public_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resetTriggerAccessVpcs">reset_trigger_access_vpcs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_trigger_access_vpcs` <a name="put_trigger_access_vpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.putTriggerAccessVpcs"></a>

```python
def put_trigger_access_vpcs(
  value: IResolvable | typing.List[FgsFunctionV2NetworkControllerTriggerAccessVpcs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.putTriggerAccessVpcs.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>]

---

##### `reset_disable_public_network` <a name="reset_disable_public_network" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resetDisablePublicNetwork"></a>

```python
def reset_disable_public_network() -> None
```

##### `reset_trigger_access_vpcs` <a name="reset_trigger_access_vpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.resetTriggerAccessVpcs"></a>

```python
def reset_trigger_access_vpcs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.triggerAccessVpcs">trigger_access_vpcs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList">FgsFunctionV2NetworkControllerTriggerAccessVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.disablePublicNetworkInput">disable_public_network_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.triggerAccessVpcsInput">trigger_access_vpcs_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.disablePublicNetwork">disable_public_network</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trigger_access_vpcs`<sup>Required</sup> <a name="trigger_access_vpcs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.triggerAccessVpcs"></a>

```python
trigger_access_vpcs: FgsFunctionV2NetworkControllerTriggerAccessVpcsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList">FgsFunctionV2NetworkControllerTriggerAccessVpcsList</a>

---

##### `disable_public_network_input`<sup>Optional</sup> <a name="disable_public_network_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.disablePublicNetworkInput"></a>

```python
disable_public_network_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `trigger_access_vpcs_input`<sup>Optional</sup> <a name="trigger_access_vpcs_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.triggerAccessVpcsInput"></a>

```python
trigger_access_vpcs_input: IResolvable | typing.List[FgsFunctionV2NetworkControllerTriggerAccessVpcs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>]

---

##### `disable_public_network`<sup>Required</sup> <a name="disable_public_network" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.disablePublicNetwork"></a>

```python
disable_public_network: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerOutputReference.property.internalValue"></a>

```python
internal_value: FgsFunctionV2NetworkController
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkController">FgsFunctionV2NetworkController</a>

---


### FgsFunctionV2NetworkControllerTriggerAccessVpcsList <a name="FgsFunctionV2NetworkControllerTriggerAccessVpcsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FgsFunctionV2NetworkControllerTriggerAccessVpcs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>]

---


### FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference <a name="FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resetVpcId">reset_vpc_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resetVpcName">reset_vpc_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

##### `reset_vpc_name` <a name="reset_vpc_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.resetVpcName"></a>

```python
def reset_vpc_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcNameInput">vpc_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcName">vpc_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `vpc_name_input`<sup>Optional</sup> <a name="vpc_name_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcNameInput"></a>

```python
vpc_name_input: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `vpc_name`<sup>Required</sup> <a name="vpc_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.vpcName"></a>

```python
vpc_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FgsFunctionV2NetworkControllerTriggerAccessVpcs
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2NetworkControllerTriggerAccessVpcs">FgsFunctionV2NetworkControllerTriggerAccessVpcs</a>

---


### FgsFunctionV2ReservedInstancesList <a name="FgsFunctionV2ReservedInstancesList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2ReservedInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FgsFunctionV2ReservedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FgsFunctionV2ReservedInstances]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>]

---


### FgsFunctionV2ReservedInstancesOutputReference <a name="FgsFunctionV2ReservedInstancesOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.putTacticsConfig">put_tactics_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resetIdleMode">reset_idle_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resetTacticsConfig">reset_tactics_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tactics_config` <a name="put_tactics_config" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.putTacticsConfig"></a>

```python
def put_tactics_config(
  cron_configs: IResolvable | typing.List[FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs] = None
) -> None
```

###### `cron_configs`<sup>Optional</sup> <a name="cron_configs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.putTacticsConfig.parameter.cronConfigs"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>]

cron_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#cron_configs FgsFunctionV2#cron_configs}

---

##### `reset_idle_mode` <a name="reset_idle_mode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resetIdleMode"></a>

```python
def reset_idle_mode() -> None
```

##### `reset_tactics_config` <a name="reset_tactics_config" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.resetTacticsConfig"></a>

```python
def reset_tactics_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.tacticsConfig">tactics_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference">FgsFunctionV2ReservedInstancesTacticsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.idleModeInput">idle_mode_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierNameInput">qualifier_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierTypeInput">qualifier_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.tacticsConfigInput">tactics_config_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.idleMode">idle_mode</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierName">qualifier_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierType">qualifier_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tactics_config`<sup>Required</sup> <a name="tactics_config" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.tacticsConfig"></a>

```python
tactics_config: FgsFunctionV2ReservedInstancesTacticsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference">FgsFunctionV2ReservedInstancesTacticsConfigOutputReference</a>

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_mode_input`<sup>Optional</sup> <a name="idle_mode_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.idleModeInput"></a>

```python
idle_mode_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `qualifier_name_input`<sup>Optional</sup> <a name="qualifier_name_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierNameInput"></a>

```python
qualifier_name_input: str
```

- *Type:* str

---

##### `qualifier_type_input`<sup>Optional</sup> <a name="qualifier_type_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierTypeInput"></a>

```python
qualifier_type_input: str
```

- *Type:* str

---

##### `tactics_config_input`<sup>Optional</sup> <a name="tactics_config_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.tacticsConfigInput"></a>

```python
tactics_config_input: FgsFunctionV2ReservedInstancesTacticsConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a>

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_mode`<sup>Required</sup> <a name="idle_mode" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.idleMode"></a>

```python
idle_mode: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `qualifier_name`<sup>Required</sup> <a name="qualifier_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierName"></a>

```python
qualifier_name: str
```

- *Type:* str

---

##### `qualifier_type`<sup>Required</sup> <a name="qualifier_type" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.qualifierType"></a>

```python
qualifier_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FgsFunctionV2ReservedInstances
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstances">FgsFunctionV2ReservedInstances</a>

---


### FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList <a name="FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>]

---


### FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference <a name="FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.cronInput">cron_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.expiredTimeInput">expired_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.startTimeInput">start_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.cron">cron</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.expiredTime">expired_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.startTime">start_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cron_input`<sup>Optional</sup> <a name="cron_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.cronInput"></a>

```python
cron_input: str
```

- *Type:* str

---

##### `expired_time_input`<sup>Optional</sup> <a name="expired_time_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.expiredTimeInput"></a>

```python
expired_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.startTimeInput"></a>

```python
start_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.cron"></a>

```python
cron: str
```

- *Type:* str

---

##### `expired_time`<sup>Required</sup> <a name="expired_time" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.expiredTime"></a>

```python
expired_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.startTime"></a>

```python
start_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>

---


### FgsFunctionV2ReservedInstancesTacticsConfigOutputReference <a name="FgsFunctionV2ReservedInstancesTacticsConfigOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.putCronConfigs">put_cron_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resetCronConfigs">reset_cron_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cron_configs` <a name="put_cron_configs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.putCronConfigs"></a>

```python
def put_cron_configs(
  value: IResolvable | typing.List[FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.putCronConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>]

---

##### `reset_cron_configs` <a name="reset_cron_configs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.resetCronConfigs"></a>

```python
def reset_cron_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.cronConfigs">cron_configs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.cronConfigsInput">cron_configs_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_configs`<sup>Required</sup> <a name="cron_configs" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.cronConfigs"></a>

```python
cron_configs: FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigsList</a>

---

##### `cron_configs_input`<sup>Optional</sup> <a name="cron_configs_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.cronConfigsInput"></a>

```python
cron_configs_input: IResolvable | typing.List[FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs">FgsFunctionV2ReservedInstancesTacticsConfigCronConfigs</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfigOutputReference.property.internalValue"></a>

```python
internal_value: FgsFunctionV2ReservedInstancesTacticsConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2ReservedInstancesTacticsConfig">FgsFunctionV2ReservedInstancesTacticsConfig</a>

---


### FgsFunctionV2TimeoutsOutputReference <a name="FgsFunctionV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FgsFunctionV2Timeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Timeouts">FgsFunctionV2Timeouts</a>

---


### FgsFunctionV2VersionsAliasesOutputReference <a name="FgsFunctionV2VersionsAliasesOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference.property.internalValue"></a>

```python
internal_value: FgsFunctionV2VersionsAliases
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a>

---


### FgsFunctionV2VersionsList <a name="FgsFunctionV2VersionsList" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2VersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FgsFunctionV2VersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FgsFunctionV2Versions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>]

---


### FgsFunctionV2VersionsOutputReference <a name="FgsFunctionV2VersionsOutputReference" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import fgs_function_v2

fgsFunctionV2.FgsFunctionV2VersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.putAliases">put_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resetAliases">reset_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aliases` <a name="put_aliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.putAliases"></a>

```python
def put_aliases(
  name: str,
  description: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.putAliases.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#name FgsFunctionV2#name}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.putAliases.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/fgs_function_v2#description FgsFunctionV2#description}.

---

##### `reset_aliases` <a name="reset_aliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resetAliases"></a>

```python
def reset_aliases() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.aliases">aliases</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference">FgsFunctionV2VersionsAliasesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.aliasesInput">aliases_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.aliases"></a>

```python
aliases: FgsFunctionV2VersionsAliasesOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliasesOutputReference">FgsFunctionV2VersionsAliasesOutputReference</a>

---

##### `aliases_input`<sup>Optional</sup> <a name="aliases_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.aliasesInput"></a>

```python
aliases_input: FgsFunctionV2VersionsAliases
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsAliases">FgsFunctionV2VersionsAliases</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2VersionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FgsFunctionV2Versions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.fgsFunctionV2.FgsFunctionV2Versions">FgsFunctionV2Versions</a>

---



