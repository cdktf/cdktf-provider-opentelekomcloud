# `dataOpentelekomcloudCbrBackupV3` Submodule <a name="`dataOpentelekomcloudCbrBackupV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCbrBackupV3 <a name="DataOpentelekomcloudCbrBackupV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3 opentelekomcloud_cbr_backup_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cbr_backup_v3

dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_trigger: typing.Union[bool, IResolvable] = None,
  bootable: typing.Union[bool, IResolvable] = None,
  checkpoint_id: str = None,
  contain_system_disk: typing.Union[bool, IResolvable] = None,
  created_at: str = None,
  description: str = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  expired_at: str = None,
  id: str = None,
  image_type: str = None,
  incremental: typing.Union[bool, IResolvable] = None,
  name: str = None,
  parent_id: str = None,
  project_id: str = None,
  provider_id: str = None,
  resource_az: str = None,
  resource_id: str = None,
  resource_name: str = None,
  resource_size: typing.Union[int, float] = None,
  resource_type: str = None,
  snapshot_id: str = None,
  status: str = None,
  supported_restore_mode: str = None,
  support_lld: typing.Union[bool, IResolvable] = None,
  system_disk: typing.Union[bool, IResolvable] = None,
  updated_at: str = None,
  vault_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.autoTrigger">auto_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#auto_trigger DataOpentelekomcloudCbrBackupV3#auto_trigger}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.bootable">bootable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#bootable DataOpentelekomcloudCbrBackupV3#bootable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.checkpointId">checkpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#checkpoint_id DataOpentelekomcloudCbrBackupV3#checkpoint_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.containSystemDisk">contain_system_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#contain_system_disk DataOpentelekomcloudCbrBackupV3#contain_system_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.createdAt">created_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#created_at DataOpentelekomcloudCbrBackupV3#created_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#description DataOpentelekomcloudCbrBackupV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#encrypted DataOpentelekomcloudCbrBackupV3#encrypted}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.expiredAt">expired_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#expired_at DataOpentelekomcloudCbrBackupV3#expired_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#id DataOpentelekomcloudCbrBackupV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.imageType">image_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#image_type DataOpentelekomcloudCbrBackupV3#image_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.incremental">incremental</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#incremental DataOpentelekomcloudCbrBackupV3#incremental}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#name DataOpentelekomcloudCbrBackupV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#parent_id DataOpentelekomcloudCbrBackupV3#parent_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#project_id DataOpentelekomcloudCbrBackupV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.providerId">provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#provider_id DataOpentelekomcloudCbrBackupV3#provider_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceAz">resource_az</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_az DataOpentelekomcloudCbrBackupV3#resource_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_id DataOpentelekomcloudCbrBackupV3#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_name DataOpentelekomcloudCbrBackupV3#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceSize">resource_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_size DataOpentelekomcloudCbrBackupV3#resource_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_type DataOpentelekomcloudCbrBackupV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#snapshot_id DataOpentelekomcloudCbrBackupV3#snapshot_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#status DataOpentelekomcloudCbrBackupV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.supportedRestoreMode">supported_restore_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#supported_restore_mode DataOpentelekomcloudCbrBackupV3#supported_restore_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.supportLld">support_lld</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#support_lld DataOpentelekomcloudCbrBackupV3#support_lld}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.systemDisk">system_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#system_disk DataOpentelekomcloudCbrBackupV3#system_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.updatedAt">updated_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#updated_at DataOpentelekomcloudCbrBackupV3#updated_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#vault_id DataOpentelekomcloudCbrBackupV3#vault_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_trigger`<sup>Optional</sup> <a name="auto_trigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.autoTrigger"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#auto_trigger DataOpentelekomcloudCbrBackupV3#auto_trigger}.

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.bootable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#bootable DataOpentelekomcloudCbrBackupV3#bootable}.

---

##### `checkpoint_id`<sup>Optional</sup> <a name="checkpoint_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.checkpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#checkpoint_id DataOpentelekomcloudCbrBackupV3#checkpoint_id}.

---

##### `contain_system_disk`<sup>Optional</sup> <a name="contain_system_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.containSystemDisk"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#contain_system_disk DataOpentelekomcloudCbrBackupV3#contain_system_disk}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.createdAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#created_at DataOpentelekomcloudCbrBackupV3#created_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#description DataOpentelekomcloudCbrBackupV3#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.encrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#encrypted DataOpentelekomcloudCbrBackupV3#encrypted}.

---

##### `expired_at`<sup>Optional</sup> <a name="expired_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.expiredAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#expired_at DataOpentelekomcloudCbrBackupV3#expired_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#id DataOpentelekomcloudCbrBackupV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_type`<sup>Optional</sup> <a name="image_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.imageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#image_type DataOpentelekomcloudCbrBackupV3#image_type}.

---

##### `incremental`<sup>Optional</sup> <a name="incremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.incremental"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#incremental DataOpentelekomcloudCbrBackupV3#incremental}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#name DataOpentelekomcloudCbrBackupV3#name}.

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.parentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#parent_id DataOpentelekomcloudCbrBackupV3#parent_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#project_id DataOpentelekomcloudCbrBackupV3#project_id}.

---

##### `provider_id`<sup>Optional</sup> <a name="provider_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.providerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#provider_id DataOpentelekomcloudCbrBackupV3#provider_id}.

---

##### `resource_az`<sup>Optional</sup> <a name="resource_az" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceAz"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_az DataOpentelekomcloudCbrBackupV3#resource_az}.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_id DataOpentelekomcloudCbrBackupV3#resource_id}.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_name DataOpentelekomcloudCbrBackupV3#resource_name}.

---

##### `resource_size`<sup>Optional</sup> <a name="resource_size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_size DataOpentelekomcloudCbrBackupV3#resource_size}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_type DataOpentelekomcloudCbrBackupV3#resource_type}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#snapshot_id DataOpentelekomcloudCbrBackupV3#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#status DataOpentelekomcloudCbrBackupV3#status}.

---

##### `supported_restore_mode`<sup>Optional</sup> <a name="supported_restore_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.supportedRestoreMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#supported_restore_mode DataOpentelekomcloudCbrBackupV3#supported_restore_mode}.

---

##### `support_lld`<sup>Optional</sup> <a name="support_lld" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.supportLld"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#support_lld DataOpentelekomcloudCbrBackupV3#support_lld}.

---

##### `system_disk`<sup>Optional</sup> <a name="system_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.systemDisk"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#system_disk DataOpentelekomcloudCbrBackupV3#system_disk}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.updatedAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#updated_at DataOpentelekomcloudCbrBackupV3#updated_at}.

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.Initializer.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#vault_id DataOpentelekomcloudCbrBackupV3#vault_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetAutoTrigger">reset_auto_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetBootable">reset_bootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetCheckpointId">reset_checkpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetContainSystemDisk">reset_contain_system_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetExpiredAt">reset_expired_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetImageType">reset_image_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetIncremental">reset_incremental</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetParentId">reset_parent_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetProviderId">reset_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceAz">reset_resource_az</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceName">reset_resource_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceSize">reset_resource_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSupportedRestoreMode">reset_supported_restore_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSupportLld">reset_support_lld</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSystemDisk">reset_system_disk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetVaultId">reset_vault_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_auto_trigger` <a name="reset_auto_trigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetAutoTrigger"></a>

```python
def reset_auto_trigger() -> None
```

##### `reset_bootable` <a name="reset_bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetBootable"></a>

```python
def reset_bootable() -> None
```

##### `reset_checkpoint_id` <a name="reset_checkpoint_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetCheckpointId"></a>

```python
def reset_checkpoint_id() -> None
```

##### `reset_contain_system_disk` <a name="reset_contain_system_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetContainSystemDisk"></a>

```python
def reset_contain_system_disk() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_expired_at` <a name="reset_expired_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetExpiredAt"></a>

```python
def reset_expired_at() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_type` <a name="reset_image_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetImageType"></a>

```python
def reset_image_type() -> None
```

##### `reset_incremental` <a name="reset_incremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetIncremental"></a>

```python
def reset_incremental() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parent_id` <a name="reset_parent_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetParentId"></a>

```python
def reset_parent_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_provider_id` <a name="reset_provider_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetProviderId"></a>

```python
def reset_provider_id() -> None
```

##### `reset_resource_az` <a name="reset_resource_az" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceAz"></a>

```python
def reset_resource_az() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_resource_name` <a name="reset_resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceName"></a>

```python
def reset_resource_name() -> None
```

##### `reset_resource_size` <a name="reset_resource_size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceSize"></a>

```python
def reset_resource_size() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_supported_restore_mode` <a name="reset_supported_restore_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSupportedRestoreMode"></a>

```python
def reset_supported_restore_mode() -> None
```

##### `reset_support_lld` <a name="reset_support_lld" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSupportLld"></a>

```python
def reset_support_lld() -> None
```

##### `reset_system_disk` <a name="reset_system_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetSystemDisk"></a>

```python
def reset_system_disk() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

##### `reset_vault_id` <a name="reset_vault_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.resetVaultId"></a>

```python
def reset_vault_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCbrBackupV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cbr_backup_v3

dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cbr_backup_v3

dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cbr_backup_v3

dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cbr_backup_v3

dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudCbrBackupV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudCbrBackupV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudCbrBackupV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCbrBackupV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.autoTriggerInput">auto_trigger_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.bootableInput">bootable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.checkpointIdInput">checkpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.containSystemDiskInput">contain_system_disk_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.createdAtInput">created_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.expiredAtInput">expired_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.imageTypeInput">image_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.incrementalInput">incremental_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.providerIdInput">provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceAzInput">resource_az_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceSizeInput">resource_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportedRestoreModeInput">supported_restore_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportLldInput">support_lld_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.systemDiskInput">system_disk_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.updatedAtInput">updated_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.autoTrigger">auto_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.bootable">bootable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.checkpointId">checkpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.containSystemDisk">contain_system_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.expiredAt">expired_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.imageType">image_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.incremental">incremental</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.providerId">provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceAz">resource_az</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceSize">resource_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportedRestoreMode">supported_restore_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportLld">support_lld</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.systemDisk">system_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `auto_trigger_input`<sup>Optional</sup> <a name="auto_trigger_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.autoTriggerInput"></a>

```python
auto_trigger_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bootable_input`<sup>Optional</sup> <a name="bootable_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.bootableInput"></a>

```python
bootable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `checkpoint_id_input`<sup>Optional</sup> <a name="checkpoint_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.checkpointIdInput"></a>

```python
checkpoint_id_input: str
```

- *Type:* str

---

##### `contain_system_disk_input`<sup>Optional</sup> <a name="contain_system_disk_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.containSystemDiskInput"></a>

```python
contain_system_disk_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.createdAtInput"></a>

```python
created_at_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expired_at_input`<sup>Optional</sup> <a name="expired_at_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.expiredAtInput"></a>

```python
expired_at_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_type_input`<sup>Optional</sup> <a name="image_type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.imageTypeInput"></a>

```python
image_type_input: str
```

- *Type:* str

---

##### `incremental_input`<sup>Optional</sup> <a name="incremental_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.incrementalInput"></a>

```python
incremental_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `provider_id_input`<sup>Optional</sup> <a name="provider_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.providerIdInput"></a>

```python
provider_id_input: str
```

- *Type:* str

---

##### `resource_az_input`<sup>Optional</sup> <a name="resource_az_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceAzInput"></a>

```python
resource_az_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `resource_size_input`<sup>Optional</sup> <a name="resource_size_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceSizeInput"></a>

```python
resource_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `supported_restore_mode_input`<sup>Optional</sup> <a name="supported_restore_mode_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportedRestoreModeInput"></a>

```python
supported_restore_mode_input: str
```

- *Type:* str

---

##### `support_lld_input`<sup>Optional</sup> <a name="support_lld_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportLldInput"></a>

```python
support_lld_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `system_disk_input`<sup>Optional</sup> <a name="system_disk_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.systemDiskInput"></a>

```python
system_disk_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.updatedAtInput"></a>

```python
updated_at_input: str
```

- *Type:* str

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `auto_trigger`<sup>Required</sup> <a name="auto_trigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.autoTrigger"></a>

```python
auto_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.bootable"></a>

```python
bootable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `checkpoint_id`<sup>Required</sup> <a name="checkpoint_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.checkpointId"></a>

```python
checkpoint_id: str
```

- *Type:* str

---

##### `contain_system_disk`<sup>Required</sup> <a name="contain_system_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.containSystemDisk"></a>

```python
contain_system_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expired_at`<sup>Required</sup> <a name="expired_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.expiredAt"></a>

```python
expired_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_type`<sup>Required</sup> <a name="image_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

---

##### `incremental`<sup>Required</sup> <a name="incremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.incremental"></a>

```python
incremental: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

---

##### `resource_az`<sup>Required</sup> <a name="resource_az" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceAz"></a>

```python
resource_az: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_size`<sup>Required</sup> <a name="resource_size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceSize"></a>

```python
resource_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `supported_restore_mode`<sup>Required</sup> <a name="supported_restore_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportedRestoreMode"></a>

```python
supported_restore_mode: str
```

- *Type:* str

---

##### `support_lld`<sup>Required</sup> <a name="support_lld" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.supportLld"></a>

```python
support_lld: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `system_disk`<sup>Required</sup> <a name="system_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.systemDisk"></a>

```python
system_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCbrBackupV3Config <a name="DataOpentelekomcloudCbrBackupV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_cbr_backup_v3

dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_trigger: typing.Union[bool, IResolvable] = None,
  bootable: typing.Union[bool, IResolvable] = None,
  checkpoint_id: str = None,
  contain_system_disk: typing.Union[bool, IResolvable] = None,
  created_at: str = None,
  description: str = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  expired_at: str = None,
  id: str = None,
  image_type: str = None,
  incremental: typing.Union[bool, IResolvable] = None,
  name: str = None,
  parent_id: str = None,
  project_id: str = None,
  provider_id: str = None,
  resource_az: str = None,
  resource_id: str = None,
  resource_name: str = None,
  resource_size: typing.Union[int, float] = None,
  resource_type: str = None,
  snapshot_id: str = None,
  status: str = None,
  supported_restore_mode: str = None,
  support_lld: typing.Union[bool, IResolvable] = None,
  system_disk: typing.Union[bool, IResolvable] = None,
  updated_at: str = None,
  vault_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.autoTrigger">auto_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#auto_trigger DataOpentelekomcloudCbrBackupV3#auto_trigger}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.bootable">bootable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#bootable DataOpentelekomcloudCbrBackupV3#bootable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.checkpointId">checkpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#checkpoint_id DataOpentelekomcloudCbrBackupV3#checkpoint_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.containSystemDisk">contain_system_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#contain_system_disk DataOpentelekomcloudCbrBackupV3#contain_system_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.createdAt">created_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#created_at DataOpentelekomcloudCbrBackupV3#created_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#description DataOpentelekomcloudCbrBackupV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#encrypted DataOpentelekomcloudCbrBackupV3#encrypted}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.expiredAt">expired_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#expired_at DataOpentelekomcloudCbrBackupV3#expired_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#id DataOpentelekomcloudCbrBackupV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.imageType">image_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#image_type DataOpentelekomcloudCbrBackupV3#image_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.incremental">incremental</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#incremental DataOpentelekomcloudCbrBackupV3#incremental}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#name DataOpentelekomcloudCbrBackupV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#parent_id DataOpentelekomcloudCbrBackupV3#parent_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#project_id DataOpentelekomcloudCbrBackupV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.providerId">provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#provider_id DataOpentelekomcloudCbrBackupV3#provider_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceAz">resource_az</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_az DataOpentelekomcloudCbrBackupV3#resource_az}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_id DataOpentelekomcloudCbrBackupV3#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_name DataOpentelekomcloudCbrBackupV3#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceSize">resource_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_size DataOpentelekomcloudCbrBackupV3#resource_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_type DataOpentelekomcloudCbrBackupV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#snapshot_id DataOpentelekomcloudCbrBackupV3#snapshot_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#status DataOpentelekomcloudCbrBackupV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.supportedRestoreMode">supported_restore_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#supported_restore_mode DataOpentelekomcloudCbrBackupV3#supported_restore_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.supportLld">support_lld</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#support_lld DataOpentelekomcloudCbrBackupV3#support_lld}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.systemDisk">system_disk</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#system_disk DataOpentelekomcloudCbrBackupV3#system_disk}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.updatedAt">updated_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#updated_at DataOpentelekomcloudCbrBackupV3#updated_at}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#vault_id DataOpentelekomcloudCbrBackupV3#vault_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_trigger`<sup>Optional</sup> <a name="auto_trigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.autoTrigger"></a>

```python
auto_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#auto_trigger DataOpentelekomcloudCbrBackupV3#auto_trigger}.

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.bootable"></a>

```python
bootable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#bootable DataOpentelekomcloudCbrBackupV3#bootable}.

---

##### `checkpoint_id`<sup>Optional</sup> <a name="checkpoint_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.checkpointId"></a>

```python
checkpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#checkpoint_id DataOpentelekomcloudCbrBackupV3#checkpoint_id}.

---

##### `contain_system_disk`<sup>Optional</sup> <a name="contain_system_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.containSystemDisk"></a>

```python
contain_system_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#contain_system_disk DataOpentelekomcloudCbrBackupV3#contain_system_disk}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#created_at DataOpentelekomcloudCbrBackupV3#created_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#description DataOpentelekomcloudCbrBackupV3#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#encrypted DataOpentelekomcloudCbrBackupV3#encrypted}.

---

##### `expired_at`<sup>Optional</sup> <a name="expired_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.expiredAt"></a>

```python
expired_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#expired_at DataOpentelekomcloudCbrBackupV3#expired_at}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#id DataOpentelekomcloudCbrBackupV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_type`<sup>Optional</sup> <a name="image_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.imageType"></a>

```python
image_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#image_type DataOpentelekomcloudCbrBackupV3#image_type}.

---

##### `incremental`<sup>Optional</sup> <a name="incremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.incremental"></a>

```python
incremental: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#incremental DataOpentelekomcloudCbrBackupV3#incremental}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#name DataOpentelekomcloudCbrBackupV3#name}.

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#parent_id DataOpentelekomcloudCbrBackupV3#parent_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#project_id DataOpentelekomcloudCbrBackupV3#project_id}.

---

##### `provider_id`<sup>Optional</sup> <a name="provider_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#provider_id DataOpentelekomcloudCbrBackupV3#provider_id}.

---

##### `resource_az`<sup>Optional</sup> <a name="resource_az" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceAz"></a>

```python
resource_az: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_az DataOpentelekomcloudCbrBackupV3#resource_az}.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_id DataOpentelekomcloudCbrBackupV3#resource_id}.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_name DataOpentelekomcloudCbrBackupV3#resource_name}.

---

##### `resource_size`<sup>Optional</sup> <a name="resource_size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceSize"></a>

```python
resource_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_size DataOpentelekomcloudCbrBackupV3#resource_size}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#resource_type DataOpentelekomcloudCbrBackupV3#resource_type}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#snapshot_id DataOpentelekomcloudCbrBackupV3#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#status DataOpentelekomcloudCbrBackupV3#status}.

---

##### `supported_restore_mode`<sup>Optional</sup> <a name="supported_restore_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.supportedRestoreMode"></a>

```python
supported_restore_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#supported_restore_mode DataOpentelekomcloudCbrBackupV3#supported_restore_mode}.

---

##### `support_lld`<sup>Optional</sup> <a name="support_lld" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.supportLld"></a>

```python
support_lld: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#support_lld DataOpentelekomcloudCbrBackupV3#support_lld}.

---

##### `system_disk`<sup>Optional</sup> <a name="system_disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.systemDisk"></a>

```python
system_disk: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#system_disk DataOpentelekomcloudCbrBackupV3#system_disk}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#updated_at DataOpentelekomcloudCbrBackupV3#updated_at}.

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCbrBackupV3.DataOpentelekomcloudCbrBackupV3Config.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.16/docs/data-sources/cbr_backup_v3#vault_id DataOpentelekomcloudCbrBackupV3#vault_id}.

---



