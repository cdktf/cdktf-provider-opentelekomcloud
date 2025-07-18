# `ltsCrossAccountAccessV2` Submodule <a name="`ltsCrossAccountAccessV2` Submodule" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsCrossAccountAccessV2 <a name="LtsCrossAccountAccessV2" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2 opentelekomcloud_lts_cross_account_access_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_cross_account_access_v2

ltsCrossAccountAccessV2.LtsCrossAccountAccessV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agency_domain_name: str,
  agency_name: str,
  agency_project_id: str,
  log_agency_group_id: str,
  log_agency_group_name: str,
  log_agency_stream_id: str,
  log_agency_stream_name: str,
  log_group_id: str,
  log_group_name: str,
  log_stream_id: str,
  log_stream_name: str,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.agencyDomainName">agency_domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#agency_domain_name LtsCrossAccountAccessV2#agency_domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.agencyName">agency_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#agency_name LtsCrossAccountAccessV2#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.agencyProjectId">agency_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#agency_project_id LtsCrossAccountAccessV2#agency_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logAgencyGroupId">log_agency_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_group_id LtsCrossAccountAccessV2#log_agency_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logAgencyGroupName">log_agency_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_group_name LtsCrossAccountAccessV2#log_agency_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logAgencyStreamId">log_agency_stream_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_stream_id LtsCrossAccountAccessV2#log_agency_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logAgencyStreamName">log_agency_stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_stream_name LtsCrossAccountAccessV2#log_agency_stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_group_id LtsCrossAccountAccessV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_group_name LtsCrossAccountAccessV2#log_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logStreamId">log_stream_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_stream_id LtsCrossAccountAccessV2#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logStreamName">log_stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_stream_name LtsCrossAccountAccessV2#log_stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#name LtsCrossAccountAccessV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#id LtsCrossAccountAccessV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#tags LtsCrossAccountAccessV2#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agency_domain_name`<sup>Required</sup> <a name="agency_domain_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.agencyDomainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#agency_domain_name LtsCrossAccountAccessV2#agency_domain_name}.

---

##### `agency_name`<sup>Required</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.agencyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#agency_name LtsCrossAccountAccessV2#agency_name}.

---

##### `agency_project_id`<sup>Required</sup> <a name="agency_project_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.agencyProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#agency_project_id LtsCrossAccountAccessV2#agency_project_id}.

---

##### `log_agency_group_id`<sup>Required</sup> <a name="log_agency_group_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logAgencyGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_group_id LtsCrossAccountAccessV2#log_agency_group_id}.

---

##### `log_agency_group_name`<sup>Required</sup> <a name="log_agency_group_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logAgencyGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_group_name LtsCrossAccountAccessV2#log_agency_group_name}.

---

##### `log_agency_stream_id`<sup>Required</sup> <a name="log_agency_stream_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logAgencyStreamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_stream_id LtsCrossAccountAccessV2#log_agency_stream_id}.

---

##### `log_agency_stream_name`<sup>Required</sup> <a name="log_agency_stream_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logAgencyStreamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_stream_name LtsCrossAccountAccessV2#log_agency_stream_name}.

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_group_id LtsCrossAccountAccessV2#log_group_id}.

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_group_name LtsCrossAccountAccessV2#log_group_name}.

---

##### `log_stream_id`<sup>Required</sup> <a name="log_stream_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logStreamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_stream_id LtsCrossAccountAccessV2#log_stream_id}.

---

##### `log_stream_name`<sup>Required</sup> <a name="log_stream_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.logStreamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_stream_name LtsCrossAccountAccessV2#log_stream_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#name LtsCrossAccountAccessV2#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#id LtsCrossAccountAccessV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#tags LtsCrossAccountAccessV2#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LtsCrossAccountAccessV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_cross_account_access_v2

ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_cross_account_access_v2

ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_cross_account_access_v2

ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_cross_account_access_v2

ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LtsCrossAccountAccessV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LtsCrossAccountAccessV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LtsCrossAccountAccessV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LtsCrossAccountAccessV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.accessConfigType">access_config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainNameInput">agency_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyNameInput">agency_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectIdInput">agency_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupIdInput">log_agency_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupNameInput">log_agency_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamIdInput">log_agency_stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamNameInput">log_agency_stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupIdInput">log_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamIdInput">log_stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamNameInput">log_stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainName">agency_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyName">agency_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectId">agency_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupId">log_agency_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupName">log_agency_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamId">log_agency_stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamName">log_agency_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamId">log_stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamName">log_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_config_type`<sup>Required</sup> <a name="access_config_type" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.accessConfigType"></a>

```python
access_config_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `agency_domain_name_input`<sup>Optional</sup> <a name="agency_domain_name_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainNameInput"></a>

```python
agency_domain_name_input: str
```

- *Type:* str

---

##### `agency_name_input`<sup>Optional</sup> <a name="agency_name_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyNameInput"></a>

```python
agency_name_input: str
```

- *Type:* str

---

##### `agency_project_id_input`<sup>Optional</sup> <a name="agency_project_id_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectIdInput"></a>

```python
agency_project_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_agency_group_id_input`<sup>Optional</sup> <a name="log_agency_group_id_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupIdInput"></a>

```python
log_agency_group_id_input: str
```

- *Type:* str

---

##### `log_agency_group_name_input`<sup>Optional</sup> <a name="log_agency_group_name_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupNameInput"></a>

```python
log_agency_group_name_input: str
```

- *Type:* str

---

##### `log_agency_stream_id_input`<sup>Optional</sup> <a name="log_agency_stream_id_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamIdInput"></a>

```python
log_agency_stream_id_input: str
```

- *Type:* str

---

##### `log_agency_stream_name_input`<sup>Optional</sup> <a name="log_agency_stream_name_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamNameInput"></a>

```python
log_agency_stream_name_input: str
```

- *Type:* str

---

##### `log_group_id_input`<sup>Optional</sup> <a name="log_group_id_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupIdInput"></a>

```python
log_group_id_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `log_stream_id_input`<sup>Optional</sup> <a name="log_stream_id_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamIdInput"></a>

```python
log_stream_id_input: str
```

- *Type:* str

---

##### `log_stream_name_input`<sup>Optional</sup> <a name="log_stream_name_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamNameInput"></a>

```python
log_stream_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `agency_domain_name`<sup>Required</sup> <a name="agency_domain_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainName"></a>

```python
agency_domain_name: str
```

- *Type:* str

---

##### `agency_name`<sup>Required</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyName"></a>

```python
agency_name: str
```

- *Type:* str

---

##### `agency_project_id`<sup>Required</sup> <a name="agency_project_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectId"></a>

```python
agency_project_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_agency_group_id`<sup>Required</sup> <a name="log_agency_group_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupId"></a>

```python
log_agency_group_id: str
```

- *Type:* str

---

##### `log_agency_group_name`<sup>Required</sup> <a name="log_agency_group_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupName"></a>

```python
log_agency_group_name: str
```

- *Type:* str

---

##### `log_agency_stream_id`<sup>Required</sup> <a name="log_agency_stream_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamId"></a>

```python
log_agency_stream_id: str
```

- *Type:* str

---

##### `log_agency_stream_name`<sup>Required</sup> <a name="log_agency_stream_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamName"></a>

```python
log_agency_stream_name: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `log_stream_id`<sup>Required</sup> <a name="log_stream_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamId"></a>

```python
log_stream_id: str
```

- *Type:* str

---

##### `log_stream_name`<sup>Required</sup> <a name="log_stream_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamName"></a>

```python
log_stream_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LtsCrossAccountAccessV2Config <a name="LtsCrossAccountAccessV2Config" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import lts_cross_account_access_v2

ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agency_domain_name: str,
  agency_name: str,
  agency_project_id: str,
  log_agency_group_id: str,
  log_agency_group_name: str,
  log_agency_stream_id: str,
  log_agency_stream_name: str,
  log_group_id: str,
  log_group_name: str,
  log_stream_id: str,
  log_stream_name: str,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyDomainName">agency_domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#agency_domain_name LtsCrossAccountAccessV2#agency_domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyName">agency_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#agency_name LtsCrossAccountAccessV2#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyProjectId">agency_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#agency_project_id LtsCrossAccountAccessV2#agency_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupId">log_agency_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_group_id LtsCrossAccountAccessV2#log_agency_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupName">log_agency_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_group_name LtsCrossAccountAccessV2#log_agency_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamId">log_agency_stream_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_stream_id LtsCrossAccountAccessV2#log_agency_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamName">log_agency_stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_stream_name LtsCrossAccountAccessV2#log_agency_stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_group_id LtsCrossAccountAccessV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_group_name LtsCrossAccountAccessV2#log_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamId">log_stream_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_stream_id LtsCrossAccountAccessV2#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamName">log_stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_stream_name LtsCrossAccountAccessV2#log_stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#name LtsCrossAccountAccessV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#id LtsCrossAccountAccessV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#tags LtsCrossAccountAccessV2#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agency_domain_name`<sup>Required</sup> <a name="agency_domain_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyDomainName"></a>

```python
agency_domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#agency_domain_name LtsCrossAccountAccessV2#agency_domain_name}.

---

##### `agency_name`<sup>Required</sup> <a name="agency_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyName"></a>

```python
agency_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#agency_name LtsCrossAccountAccessV2#agency_name}.

---

##### `agency_project_id`<sup>Required</sup> <a name="agency_project_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyProjectId"></a>

```python
agency_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#agency_project_id LtsCrossAccountAccessV2#agency_project_id}.

---

##### `log_agency_group_id`<sup>Required</sup> <a name="log_agency_group_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupId"></a>

```python
log_agency_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_group_id LtsCrossAccountAccessV2#log_agency_group_id}.

---

##### `log_agency_group_name`<sup>Required</sup> <a name="log_agency_group_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupName"></a>

```python
log_agency_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_group_name LtsCrossAccountAccessV2#log_agency_group_name}.

---

##### `log_agency_stream_id`<sup>Required</sup> <a name="log_agency_stream_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamId"></a>

```python
log_agency_stream_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_stream_id LtsCrossAccountAccessV2#log_agency_stream_id}.

---

##### `log_agency_stream_name`<sup>Required</sup> <a name="log_agency_stream_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamName"></a>

```python
log_agency_stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_agency_stream_name LtsCrossAccountAccessV2#log_agency_stream_name}.

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_group_id LtsCrossAccountAccessV2#log_group_id}.

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_group_name LtsCrossAccountAccessV2#log_group_name}.

---

##### `log_stream_id`<sup>Required</sup> <a name="log_stream_id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamId"></a>

```python
log_stream_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_stream_id LtsCrossAccountAccessV2#log_stream_id}.

---

##### `log_stream_name`<sup>Required</sup> <a name="log_stream_name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamName"></a>

```python
log_stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#log_stream_name LtsCrossAccountAccessV2#log_stream_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#name LtsCrossAccountAccessV2#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#id LtsCrossAccountAccessV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/resources/lts_cross_account_access_v2#tags LtsCrossAccountAccessV2#tags}.

---



