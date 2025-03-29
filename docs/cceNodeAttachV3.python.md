# `cceNodeAttachV3` Submodule <a name="`cceNodeAttachV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceNodeAttachV3 <a name="CceNodeAttachV3" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3 opentelekomcloud_cce_node_attach_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  os: str,
  server_id: str,
  docker_base_size: typing.Union[int, float] = None,
  id: str = None,
  k8_s_tags: typing.Mapping[str] = None,
  key_pair: str = None,
  lvm_config: str = None,
  max_pods: typing.Union[int, float] = None,
  name: str = None,
  password: str = None,
  postinstall: str = None,
  preinstall: str = None,
  private_key: str = None,
  runtime: str = None,
  storage: CceNodeAttachV3Storage = None,
  system_disk_kms_key_id: str = None,
  tags: typing.Mapping[str] = None,
  taints: typing.Union[IResolvable, typing.List[CceNodeAttachV3Taints]] = None,
  timeouts: CceNodeAttachV3Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#cluster_id CceNodeAttachV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#os CceNodeAttachV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#server_id CceNodeAttachV3#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.dockerBaseSize">docker_base_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#docker_base_size CceNodeAttachV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#id CceNodeAttachV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.k8STags">k8_s_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#k8s_tags CceNodeAttachV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#key_pair CceNodeAttachV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.lvmConfig">lvm_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#lvm_config CceNodeAttachV3#lvm_config}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#max_pods CceNodeAttachV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#password CceNodeAttachV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.postinstall">postinstall</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#postinstall CceNodeAttachV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.preinstall">preinstall</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#preinstall CceNodeAttachV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#private_key CceNodeAttachV3#private_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#runtime CceNodeAttachV3#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.systemDiskKmsKeyId">system_disk_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#system_disk_kms_key_id CceNodeAttachV3#system_disk_kms_key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#tags CceNodeAttachV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>]]</code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#cluster_id CceNodeAttachV3#cluster_id}.

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.os"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#os CceNodeAttachV3#os}.

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.serverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#server_id CceNodeAttachV3#server_id}.

---

##### `docker_base_size`<sup>Optional</sup> <a name="docker_base_size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.dockerBaseSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#docker_base_size CceNodeAttachV3#docker_base_size}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#id CceNodeAttachV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `k8_s_tags`<sup>Optional</sup> <a name="k8_s_tags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.k8STags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#k8s_tags CceNodeAttachV3#k8s_tags}.

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.keyPair"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#key_pair CceNodeAttachV3#key_pair}.

---

##### `lvm_config`<sup>Optional</sup> <a name="lvm_config" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.lvmConfig"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#lvm_config CceNodeAttachV3#lvm_config}.

---

##### `max_pods`<sup>Optional</sup> <a name="max_pods" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.maxPods"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#max_pods CceNodeAttachV3#max_pods}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#password CceNodeAttachV3#password}.

---

##### `postinstall`<sup>Optional</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.postinstall"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#postinstall CceNodeAttachV3#postinstall}.

---

##### `preinstall`<sup>Optional</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.preinstall"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#preinstall CceNodeAttachV3#preinstall}.

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#private_key CceNodeAttachV3#private_key}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.runtime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#runtime CceNodeAttachV3#runtime}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#storage CceNodeAttachV3#storage}

---

##### `system_disk_kms_key_id`<sup>Optional</sup> <a name="system_disk_kms_key_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.systemDiskKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#system_disk_kms_key_id CceNodeAttachV3#system_disk_kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#tags CceNodeAttachV3#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.taints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#taints CceNodeAttachV3#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#timeouts CceNodeAttachV3#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTaints">put_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetDockerBaseSize">reset_docker_base_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetK8STags">reset_k8_s_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetKeyPair">reset_key_pair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetLvmConfig">reset_lvm_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetMaxPods">reset_max_pods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPostinstall">reset_postinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPreinstall">reset_preinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetStorage">reset_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetSystemDiskKmsKeyId">reset_system_disk_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetTaints">reset_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_storage` <a name="put_storage" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putStorage"></a>

```python
def put_storage(
  groups: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageGroups]],
  selectors: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageSelectors]]
) -> None
```

###### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putStorage.parameter.groups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>]]

groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#groups CceNodeAttachV3#groups}

---

###### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putStorage.parameter.selectors"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>]]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#selectors CceNodeAttachV3#selectors}

---

##### `put_taints` <a name="put_taints" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTaints"></a>

```python
def put_taints(
  value: typing.Union[IResolvable, typing.List[CceNodeAttachV3Taints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTaints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#create CceNodeAttachV3#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#delete CceNodeAttachV3#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#update CceNodeAttachV3#update}.

---

##### `reset_docker_base_size` <a name="reset_docker_base_size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetDockerBaseSize"></a>

```python
def reset_docker_base_size() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_k8_s_tags` <a name="reset_k8_s_tags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetK8STags"></a>

```python
def reset_k8_s_tags() -> None
```

##### `reset_key_pair` <a name="reset_key_pair" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetKeyPair"></a>

```python
def reset_key_pair() -> None
```

##### `reset_lvm_config` <a name="reset_lvm_config" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetLvmConfig"></a>

```python
def reset_lvm_config() -> None
```

##### `reset_max_pods` <a name="reset_max_pods" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetMaxPods"></a>

```python
def reset_max_pods() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_postinstall` <a name="reset_postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPostinstall"></a>

```python
def reset_postinstall() -> None
```

##### `reset_preinstall` <a name="reset_preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPreinstall"></a>

```python
def reset_preinstall() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetStorage"></a>

```python
def reset_storage() -> None
```

##### `reset_system_disk_kms_key_id` <a name="reset_system_disk_kms_key_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetSystemDiskKmsKeyId"></a>

```python
def reset_system_disk_kms_key_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_taints` <a name="reset_taints" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetTaints"></a>

```python
def reset_taints() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CceNodeAttachV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CceNodeAttachV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CceNodeAttachV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CceNodeAttachV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CceNodeAttachV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.billingMode">billing_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dataVolumes">data_volumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList">CceNodeAttachV3DataVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList">CceNodeAttachV3RootVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference">CceNodeAttachV3StorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList">CceNodeAttachV3TaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference">CceNodeAttachV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dockerBaseSizeInput">docker_base_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.k8STagsInput">k8_s_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.keyPairInput">key_pair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.lvmConfigInput">lvm_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.maxPodsInput">max_pods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.osInput">os_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.postinstallInput">postinstall_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.preinstallInput">preinstall_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.storageInput">storage_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.systemDiskKmsKeyIdInput">system_disk_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.taintsInput">taints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dockerBaseSize">docker_base_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.k8STags">k8_s_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.lvmConfig">lvm_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.postinstall">postinstall</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.preinstall">preinstall</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.systemDiskKmsKeyId">system_disk_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `billing_mode`<sup>Required</sup> <a name="billing_mode" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.billingMode"></a>

```python
billing_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_volumes`<sup>Required</sup> <a name="data_volumes" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dataVolumes"></a>

```python
data_volumes: CceNodeAttachV3DataVolumesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList">CceNodeAttachV3DataVolumesList</a>

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.rootVolume"></a>

```python
root_volume: CceNodeAttachV3RootVolumeList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList">CceNodeAttachV3RootVolumeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.storage"></a>

```python
storage: CceNodeAttachV3StorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference">CceNodeAttachV3StorageOutputReference</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.taints"></a>

```python
taints: CceNodeAttachV3TaintsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList">CceNodeAttachV3TaintsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.timeouts"></a>

```python
timeouts: CceNodeAttachV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference">CceNodeAttachV3TimeoutsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `docker_base_size_input`<sup>Optional</sup> <a name="docker_base_size_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dockerBaseSizeInput"></a>

```python
docker_base_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `k8_s_tags_input`<sup>Optional</sup> <a name="k8_s_tags_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.k8STagsInput"></a>

```python
k8_s_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_pair_input`<sup>Optional</sup> <a name="key_pair_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.keyPairInput"></a>

```python
key_pair_input: str
```

- *Type:* str

---

##### `lvm_config_input`<sup>Optional</sup> <a name="lvm_config_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.lvmConfigInput"></a>

```python
lvm_config_input: str
```

- *Type:* str

---

##### `max_pods_input`<sup>Optional</sup> <a name="max_pods_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.maxPodsInput"></a>

```python
max_pods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_input`<sup>Optional</sup> <a name="os_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.osInput"></a>

```python
os_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `postinstall_input`<sup>Optional</sup> <a name="postinstall_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.postinstallInput"></a>

```python
postinstall_input: str
```

- *Type:* str

---

##### `preinstall_input`<sup>Optional</sup> <a name="preinstall_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.preinstallInput"></a>

```python
preinstall_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.storageInput"></a>

```python
storage_input: CceNodeAttachV3Storage
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a>

---

##### `system_disk_kms_key_id_input`<sup>Optional</sup> <a name="system_disk_kms_key_id_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.systemDiskKmsKeyIdInput"></a>

```python
system_disk_kms_key_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `taints_input`<sup>Optional</sup> <a name="taints_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.taintsInput"></a>

```python
taints_input: typing.Union[IResolvable, typing.List[CceNodeAttachV3Taints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CceNodeAttachV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a>]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `docker_base_size`<sup>Required</sup> <a name="docker_base_size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.dockerBaseSize"></a>

```python
docker_base_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `k8_s_tags`<sup>Required</sup> <a name="k8_s_tags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.k8STags"></a>

```python
k8_s_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `lvm_config`<sup>Required</sup> <a name="lvm_config" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.lvmConfig"></a>

```python
lvm_config: str
```

- *Type:* str

---

##### `max_pods`<sup>Required</sup> <a name="max_pods" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.maxPods"></a>

```python
max_pods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `postinstall`<sup>Required</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.postinstall"></a>

```python
postinstall: str
```

- *Type:* str

---

##### `preinstall`<sup>Required</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.preinstall"></a>

```python
preinstall: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `system_disk_kms_key_id`<sup>Required</sup> <a name="system_disk_kms_key_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.systemDiskKmsKeyId"></a>

```python
system_disk_kms_key_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CceNodeAttachV3Config <a name="CceNodeAttachV3Config" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  os: str,
  server_id: str,
  docker_base_size: typing.Union[int, float] = None,
  id: str = None,
  k8_s_tags: typing.Mapping[str] = None,
  key_pair: str = None,
  lvm_config: str = None,
  max_pods: typing.Union[int, float] = None,
  name: str = None,
  password: str = None,
  postinstall: str = None,
  preinstall: str = None,
  private_key: str = None,
  runtime: str = None,
  storage: CceNodeAttachV3Storage = None,
  system_disk_kms_key_id: str = None,
  tags: typing.Mapping[str] = None,
  taints: typing.Union[IResolvable, typing.List[CceNodeAttachV3Taints]] = None,
  timeouts: CceNodeAttachV3Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#cluster_id CceNodeAttachV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.os">os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#os CceNodeAttachV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#server_id CceNodeAttachV3#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.dockerBaseSize">docker_base_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#docker_base_size CceNodeAttachV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#id CceNodeAttachV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.k8STags">k8_s_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#k8s_tags CceNodeAttachV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#key_pair CceNodeAttachV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.lvmConfig">lvm_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#lvm_config CceNodeAttachV3#lvm_config}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.maxPods">max_pods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#max_pods CceNodeAttachV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#password CceNodeAttachV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.postinstall">postinstall</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#postinstall CceNodeAttachV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.preinstall">preinstall</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#preinstall CceNodeAttachV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#private_key CceNodeAttachV3#private_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#runtime CceNodeAttachV3#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.systemDiskKmsKeyId">system_disk_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#system_disk_kms_key_id CceNodeAttachV3#system_disk_kms_key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#tags CceNodeAttachV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>]]</code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#cluster_id CceNodeAttachV3#cluster_id}.

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.os"></a>

```python
os: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#os CceNodeAttachV3#os}.

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#server_id CceNodeAttachV3#server_id}.

---

##### `docker_base_size`<sup>Optional</sup> <a name="docker_base_size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.dockerBaseSize"></a>

```python
docker_base_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#docker_base_size CceNodeAttachV3#docker_base_size}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#id CceNodeAttachV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `k8_s_tags`<sup>Optional</sup> <a name="k8_s_tags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.k8STags"></a>

```python
k8_s_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#k8s_tags CceNodeAttachV3#k8s_tags}.

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#key_pair CceNodeAttachV3#key_pair}.

---

##### `lvm_config`<sup>Optional</sup> <a name="lvm_config" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.lvmConfig"></a>

```python
lvm_config: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#lvm_config CceNodeAttachV3#lvm_config}.

---

##### `max_pods`<sup>Optional</sup> <a name="max_pods" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.maxPods"></a>

```python
max_pods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#max_pods CceNodeAttachV3#max_pods}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#password CceNodeAttachV3#password}.

---

##### `postinstall`<sup>Optional</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.postinstall"></a>

```python
postinstall: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#postinstall CceNodeAttachV3#postinstall}.

---

##### `preinstall`<sup>Optional</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.preinstall"></a>

```python
preinstall: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#preinstall CceNodeAttachV3#preinstall}.

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#private_key CceNodeAttachV3#private_key}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#runtime CceNodeAttachV3#runtime}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.storage"></a>

```python
storage: CceNodeAttachV3Storage
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#storage CceNodeAttachV3#storage}

---

##### `system_disk_kms_key_id`<sup>Optional</sup> <a name="system_disk_kms_key_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.systemDiskKmsKeyId"></a>

```python
system_disk_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#system_disk_kms_key_id CceNodeAttachV3#system_disk_kms_key_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#tags CceNodeAttachV3#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.taints"></a>

```python
taints: typing.Union[IResolvable, typing.List[CceNodeAttachV3Taints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#taints CceNodeAttachV3#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Config.property.timeouts"></a>

```python
timeouts: CceNodeAttachV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#timeouts CceNodeAttachV3#timeouts}

---

### CceNodeAttachV3DataVolumes <a name="CceNodeAttachV3DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3DataVolumes()
```


### CceNodeAttachV3RootVolume <a name="CceNodeAttachV3RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3RootVolume()
```


### CceNodeAttachV3Storage <a name="CceNodeAttachV3Storage" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3Storage(
  groups: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageGroups]],
  selectors: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageSelectors]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage.property.groups">groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>]]</code> | groups block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage.property.selectors">selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>]]</code> | selectors block. |

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage.property.groups"></a>

```python
groups: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>]]

groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#groups CceNodeAttachV3#groups}

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage.property.selectors"></a>

```python
selectors: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>]]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#selectors CceNodeAttachV3#selectors}

---

### CceNodeAttachV3StorageGroups <a name="CceNodeAttachV3StorageGroups" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3StorageGroups(
  name: str,
  selector_names: typing.List[str],
  virtual_spaces: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageGroupsVirtualSpaces]],
  cce_managed: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.selectorNames">selector_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#selector_names CceNodeAttachV3#selector_names}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.virtualSpaces">virtual_spaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>]]</code> | virtual_spaces block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.cceManaged">cce_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#cce_managed CceNodeAttachV3#cce_managed}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}.

---

##### `selector_names`<sup>Required</sup> <a name="selector_names" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.selectorNames"></a>

```python
selector_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#selector_names CceNodeAttachV3#selector_names}.

---

##### `virtual_spaces`<sup>Required</sup> <a name="virtual_spaces" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.virtualSpaces"></a>

```python
virtual_spaces: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageGroupsVirtualSpaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>]]

virtual_spaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#virtual_spaces CceNodeAttachV3#virtual_spaces}

---

##### `cce_managed`<sup>Optional</sup> <a name="cce_managed" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups.property.cceManaged"></a>

```python
cce_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#cce_managed CceNodeAttachV3#cce_managed}.

---

### CceNodeAttachV3StorageGroupsVirtualSpaces <a name="CceNodeAttachV3StorageGroupsVirtualSpaces" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces(
  name: str,
  size: str,
  lvm_lv_type: str = None,
  lvm_path: str = None,
  runtime_lv_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#size CceNodeAttachV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.lvmLvType">lvm_lv_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#lvm_lv_type CceNodeAttachV3#lvm_lv_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.lvmPath">lvm_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#lvm_path CceNodeAttachV3#lvm_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.runtimeLvType">runtime_lv_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#runtime_lv_type CceNodeAttachV3#runtime_lv_type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.size"></a>

```python
size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#size CceNodeAttachV3#size}.

---

##### `lvm_lv_type`<sup>Optional</sup> <a name="lvm_lv_type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.lvmLvType"></a>

```python
lvm_lv_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#lvm_lv_type CceNodeAttachV3#lvm_lv_type}.

---

##### `lvm_path`<sup>Optional</sup> <a name="lvm_path" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.lvmPath"></a>

```python
lvm_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#lvm_path CceNodeAttachV3#lvm_path}.

---

##### `runtime_lv_type`<sup>Optional</sup> <a name="runtime_lv_type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces.property.runtimeLvType"></a>

```python
runtime_lv_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#runtime_lv_type CceNodeAttachV3#runtime_lv_type}.

---

### CceNodeAttachV3StorageSelectors <a name="CceNodeAttachV3StorageSelectors" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3StorageSelectors(
  name: str,
  match_label_count: str = None,
  match_label_metadata_cmkid: str = None,
  match_label_metadata_encrypted: str = None,
  match_label_size: str = None,
  match_label_volume_type: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelCount">match_label_count</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#match_label_count CceNodeAttachV3#match_label_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelMetadataCmkid">match_label_metadata_cmkid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#match_label_metadata_cmkid CceNodeAttachV3#match_label_metadata_cmkid}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelMetadataEncrypted">match_label_metadata_encrypted</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#match_label_metadata_encrypted CceNodeAttachV3#match_label_metadata_encrypted}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelSize">match_label_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#match_label_size CceNodeAttachV3#match_label_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelVolumeType">match_label_volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#match_label_volume_type CceNodeAttachV3#match_label_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#type CceNodeAttachV3#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#name CceNodeAttachV3#name}.

---

##### `match_label_count`<sup>Optional</sup> <a name="match_label_count" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelCount"></a>

```python
match_label_count: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#match_label_count CceNodeAttachV3#match_label_count}.

---

##### `match_label_metadata_cmkid`<sup>Optional</sup> <a name="match_label_metadata_cmkid" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelMetadataCmkid"></a>

```python
match_label_metadata_cmkid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#match_label_metadata_cmkid CceNodeAttachV3#match_label_metadata_cmkid}.

---

##### `match_label_metadata_encrypted`<sup>Optional</sup> <a name="match_label_metadata_encrypted" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelMetadataEncrypted"></a>

```python
match_label_metadata_encrypted: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#match_label_metadata_encrypted CceNodeAttachV3#match_label_metadata_encrypted}.

---

##### `match_label_size`<sup>Optional</sup> <a name="match_label_size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelSize"></a>

```python
match_label_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#match_label_size CceNodeAttachV3#match_label_size}.

---

##### `match_label_volume_type`<sup>Optional</sup> <a name="match_label_volume_type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.matchLabelVolumeType"></a>

```python
match_label_volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#match_label_volume_type CceNodeAttachV3#match_label_volume_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#type CceNodeAttachV3#type}.

---

### CceNodeAttachV3Taints <a name="CceNodeAttachV3Taints" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3Taints(
  effect: str,
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#effect CceNodeAttachV3#effect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#key CceNodeAttachV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#value CceNodeAttachV3#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#effect CceNodeAttachV3#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#key CceNodeAttachV3#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#value CceNodeAttachV3#value}.

---

### CceNodeAttachV3Timeouts <a name="CceNodeAttachV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#create CceNodeAttachV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#delete CceNodeAttachV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#update CceNodeAttachV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#create CceNodeAttachV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#delete CceNodeAttachV3#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/cce_node_attach_v3#update CceNodeAttachV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceNodeAttachV3DataVolumesList <a name="CceNodeAttachV3DataVolumesList" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3DataVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceNodeAttachV3DataVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CceNodeAttachV3DataVolumesOutputReference <a name="CceNodeAttachV3DataVolumesOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.dssPoolId">dss_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.extendParam">extend_param</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.extendParams">extend_params</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.hwPassthrough">hw_passthrough</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.kmsId">kms_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.volumetype">volumetype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumes">CceNodeAttachV3DataVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dss_pool_id`<sup>Required</sup> <a name="dss_pool_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.dssPoolId"></a>

```python
dss_pool_id: str
```

- *Type:* str

---

##### `extend_param`<sup>Required</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.extendParam"></a>

```python
extend_param: str
```

- *Type:* str

---

##### `extend_params`<sup>Required</sup> <a name="extend_params" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.extendParams"></a>

```python
extend_params: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hw_passthrough`<sup>Required</sup> <a name="hw_passthrough" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.hwPassthrough"></a>

```python
hw_passthrough: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_id`<sup>Required</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.kmsId"></a>

```python
kms_id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.volumetype"></a>

```python
volumetype: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumesOutputReference.property.internalValue"></a>

```python
internal_value: CceNodeAttachV3DataVolumes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3DataVolumes">CceNodeAttachV3DataVolumes</a>

---


### CceNodeAttachV3RootVolumeList <a name="CceNodeAttachV3RootVolumeList" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3RootVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceNodeAttachV3RootVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CceNodeAttachV3RootVolumeOutputReference <a name="CceNodeAttachV3RootVolumeOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.extendParam">extend_param</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.extendParams">extend_params</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.kmsId">kms_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.volumetype">volumetype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolume">CceNodeAttachV3RootVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extend_param`<sup>Required</sup> <a name="extend_param" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.extendParam"></a>

```python
extend_param: str
```

- *Type:* str

---

##### `extend_params`<sup>Required</sup> <a name="extend_params" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.extendParams"></a>

```python
extend_params: StringMap
```

- *Type:* cdktf.StringMap

---

##### `kms_id`<sup>Required</sup> <a name="kms_id" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.kmsId"></a>

```python
kms_id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.volumetype"></a>

```python
volumetype: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolumeOutputReference.property.internalValue"></a>

```python
internal_value: CceNodeAttachV3RootVolume
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3RootVolume">CceNodeAttachV3RootVolume</a>

---


### CceNodeAttachV3StorageGroupsList <a name="CceNodeAttachV3StorageGroupsList" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3StorageGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceNodeAttachV3StorageGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>]]

---


### CceNodeAttachV3StorageGroupsOutputReference <a name="CceNodeAttachV3StorageGroupsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.putVirtualSpaces">put_virtual_spaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.resetCceManaged">reset_cce_managed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_virtual_spaces` <a name="put_virtual_spaces" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.putVirtualSpaces"></a>

```python
def put_virtual_spaces(
  value: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageGroupsVirtualSpaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.putVirtualSpaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>]]

---

##### `reset_cce_managed` <a name="reset_cce_managed" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.resetCceManaged"></a>

```python
def reset_cce_managed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.virtualSpaces">virtual_spaces</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList">CceNodeAttachV3StorageGroupsVirtualSpacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.cceManagedInput">cce_managed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.selectorNamesInput">selector_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.virtualSpacesInput">virtual_spaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.cceManaged">cce_managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.selectorNames">selector_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_spaces`<sup>Required</sup> <a name="virtual_spaces" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.virtualSpaces"></a>

```python
virtual_spaces: CceNodeAttachV3StorageGroupsVirtualSpacesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList">CceNodeAttachV3StorageGroupsVirtualSpacesList</a>

---

##### `cce_managed_input`<sup>Optional</sup> <a name="cce_managed_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.cceManagedInput"></a>

```python
cce_managed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `selector_names_input`<sup>Optional</sup> <a name="selector_names_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.selectorNamesInput"></a>

```python
selector_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_spaces_input`<sup>Optional</sup> <a name="virtual_spaces_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.virtualSpacesInput"></a>

```python
virtual_spaces_input: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageGroupsVirtualSpaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>]]

---

##### `cce_managed`<sup>Required</sup> <a name="cce_managed" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.cceManaged"></a>

```python
cce_managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `selector_names`<sup>Required</sup> <a name="selector_names" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.selectorNames"></a>

```python
selector_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceNodeAttachV3StorageGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>]

---


### CceNodeAttachV3StorageGroupsVirtualSpacesList <a name="CceNodeAttachV3StorageGroupsVirtualSpacesList" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageGroupsVirtualSpaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>]]

---


### CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference <a name="CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resetLvmLvType">reset_lvm_lv_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resetLvmPath">reset_lvm_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resetRuntimeLvType">reset_runtime_lv_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lvm_lv_type` <a name="reset_lvm_lv_type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resetLvmLvType"></a>

```python
def reset_lvm_lv_type() -> None
```

##### `reset_lvm_path` <a name="reset_lvm_path" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resetLvmPath"></a>

```python
def reset_lvm_path() -> None
```

##### `reset_runtime_lv_type` <a name="reset_runtime_lv_type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.resetRuntimeLvType"></a>

```python
def reset_runtime_lv_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmLvTypeInput">lvm_lv_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmPathInput">lvm_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.runtimeLvTypeInput">runtime_lv_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmLvType">lvm_lv_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmPath">lvm_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.runtimeLvType">runtime_lv_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lvm_lv_type_input`<sup>Optional</sup> <a name="lvm_lv_type_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmLvTypeInput"></a>

```python
lvm_lv_type_input: str
```

- *Type:* str

---

##### `lvm_path_input`<sup>Optional</sup> <a name="lvm_path_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmPathInput"></a>

```python
lvm_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runtime_lv_type_input`<sup>Optional</sup> <a name="runtime_lv_type_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.runtimeLvTypeInput"></a>

```python
runtime_lv_type_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `lvm_lv_type`<sup>Required</sup> <a name="lvm_lv_type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmLvType"></a>

```python
lvm_lv_type: str
```

- *Type:* str

---

##### `lvm_path`<sup>Required</sup> <a name="lvm_path" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.lvmPath"></a>

```python
lvm_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime_lv_type`<sup>Required</sup> <a name="runtime_lv_type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.runtimeLvType"></a>

```python
runtime_lv_type: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceNodeAttachV3StorageGroupsVirtualSpaces]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsVirtualSpaces">CceNodeAttachV3StorageGroupsVirtualSpaces</a>]

---


### CceNodeAttachV3StorageOutputReference <a name="CceNodeAttachV3StorageOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3StorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.putGroups">put_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.putSelectors">put_selectors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_groups` <a name="put_groups" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.putGroups"></a>

```python
def put_groups(
  value: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.putGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>]]

---

##### `put_selectors` <a name="put_selectors" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.putSelectors"></a>

```python
def put_selectors(
  value: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.putSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.groups">groups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList">CceNodeAttachV3StorageGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList">CceNodeAttachV3StorageSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.groupsInput">groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.selectorsInput">selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.groups"></a>

```python
groups: CceNodeAttachV3StorageGroupsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroupsList">CceNodeAttachV3StorageGroupsList</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.selectors"></a>

```python
selectors: CceNodeAttachV3StorageSelectorsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList">CceNodeAttachV3StorageSelectorsList</a>

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.groupsInput"></a>

```python
groups_input: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageGroups">CceNodeAttachV3StorageGroups</a>]]

---

##### `selectors_input`<sup>Optional</sup> <a name="selectors_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.selectorsInput"></a>

```python
selectors_input: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageOutputReference.property.internalValue"></a>

```python
internal_value: CceNodeAttachV3Storage
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Storage">CceNodeAttachV3Storage</a>

---


### CceNodeAttachV3StorageSelectorsList <a name="CceNodeAttachV3StorageSelectorsList" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceNodeAttachV3StorageSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CceNodeAttachV3StorageSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>]]

---


### CceNodeAttachV3StorageSelectorsOutputReference <a name="CceNodeAttachV3StorageSelectorsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelCount">reset_match_label_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelMetadataCmkid">reset_match_label_metadata_cmkid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelMetadataEncrypted">reset_match_label_metadata_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelSize">reset_match_label_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelVolumeType">reset_match_label_volume_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_match_label_count` <a name="reset_match_label_count" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelCount"></a>

```python
def reset_match_label_count() -> None
```

##### `reset_match_label_metadata_cmkid` <a name="reset_match_label_metadata_cmkid" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelMetadataCmkid"></a>

```python
def reset_match_label_metadata_cmkid() -> None
```

##### `reset_match_label_metadata_encrypted` <a name="reset_match_label_metadata_encrypted" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelMetadataEncrypted"></a>

```python
def reset_match_label_metadata_encrypted() -> None
```

##### `reset_match_label_size` <a name="reset_match_label_size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelSize"></a>

```python
def reset_match_label_size() -> None
```

##### `reset_match_label_volume_type` <a name="reset_match_label_volume_type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetMatchLabelVolumeType"></a>

```python
def reset_match_label_volume_type() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelCountInput">match_label_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataCmkidInput">match_label_metadata_cmkid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataEncryptedInput">match_label_metadata_encrypted_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelSizeInput">match_label_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelVolumeTypeInput">match_label_volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelCount">match_label_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataCmkid">match_label_metadata_cmkid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataEncrypted">match_label_metadata_encrypted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelSize">match_label_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelVolumeType">match_label_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_label_count_input`<sup>Optional</sup> <a name="match_label_count_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelCountInput"></a>

```python
match_label_count_input: str
```

- *Type:* str

---

##### `match_label_metadata_cmkid_input`<sup>Optional</sup> <a name="match_label_metadata_cmkid_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataCmkidInput"></a>

```python
match_label_metadata_cmkid_input: str
```

- *Type:* str

---

##### `match_label_metadata_encrypted_input`<sup>Optional</sup> <a name="match_label_metadata_encrypted_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataEncryptedInput"></a>

```python
match_label_metadata_encrypted_input: str
```

- *Type:* str

---

##### `match_label_size_input`<sup>Optional</sup> <a name="match_label_size_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelSizeInput"></a>

```python
match_label_size_input: str
```

- *Type:* str

---

##### `match_label_volume_type_input`<sup>Optional</sup> <a name="match_label_volume_type_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelVolumeTypeInput"></a>

```python
match_label_volume_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `match_label_count`<sup>Required</sup> <a name="match_label_count" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelCount"></a>

```python
match_label_count: str
```

- *Type:* str

---

##### `match_label_metadata_cmkid`<sup>Required</sup> <a name="match_label_metadata_cmkid" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataCmkid"></a>

```python
match_label_metadata_cmkid: str
```

- *Type:* str

---

##### `match_label_metadata_encrypted`<sup>Required</sup> <a name="match_label_metadata_encrypted" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelMetadataEncrypted"></a>

```python
match_label_metadata_encrypted: str
```

- *Type:* str

---

##### `match_label_size`<sup>Required</sup> <a name="match_label_size" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelSize"></a>

```python
match_label_size: str
```

- *Type:* str

---

##### `match_label_volume_type`<sup>Required</sup> <a name="match_label_volume_type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.matchLabelVolumeType"></a>

```python
match_label_volume_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceNodeAttachV3StorageSelectors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3StorageSelectors">CceNodeAttachV3StorageSelectors</a>]

---


### CceNodeAttachV3TaintsList <a name="CceNodeAttachV3TaintsList" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3TaintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CceNodeAttachV3TaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CceNodeAttachV3Taints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>]]

---


### CceNodeAttachV3TaintsOutputReference <a name="CceNodeAttachV3TaintsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TaintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceNodeAttachV3Taints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Taints">CceNodeAttachV3Taints</a>]

---


### CceNodeAttachV3TimeoutsOutputReference <a name="CceNodeAttachV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import cce_node_attach_v3

cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CceNodeAttachV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.cceNodeAttachV3.CceNodeAttachV3Timeouts">CceNodeAttachV3Timeouts</a>]

---



