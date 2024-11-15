# `obsBucket` Submodule <a name="`obsBucket` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucket <a name="ObsBucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket opentelekomcloud_obs_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucket(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  acl: str = None,
  cors_rule: typing.Union[IResolvable, typing.List[ObsBucketCorsRule]] = None,
  event_notifications: typing.Union[IResolvable, typing.List[ObsBucketEventNotifications]] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  lifecycle_rule: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRule]] = None,
  logging: typing.Union[IResolvable, typing.List[ObsBucketLogging]] = None,
  parallel_fs: typing.Union[bool, IResolvable] = None,
  region: str = None,
  server_side_encryption: ObsBucketServerSideEncryption = None,
  storage_class: str = None,
  tags: typing.Mapping[str] = None,
  user_domain_names: typing.List[str] = None,
  versioning: typing.Union[bool, IResolvable] = None,
  website: ObsBucketWebsite = None,
  worm_policy: ObsBucketWormPolicy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#bucket ObsBucket#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#acl ObsBucket#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.eventNotifications">event_notifications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>]]</code> | event_notifications block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#force_destroy ObsBucket#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#id ObsBucket#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.lifecycleRule">lifecycle_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>]]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.logging">logging</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>]]</code> | logging block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.parallelFs">parallel_fs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#parallel_fs ObsBucket#parallel_fs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#region ObsBucket#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.serverSideEncryption">server_side_encryption</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#tags ObsBucket#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.userDomainNames">user_domain_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#user_domain_names ObsBucket#user_domain_names}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.versioning">versioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#versioning ObsBucket#versioning}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.website">website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a></code> | website block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.wormPolicy">worm_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a></code> | worm_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#bucket ObsBucket#bucket}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.acl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#acl ObsBucket#acl}.

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.corsRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#cors_rule ObsBucket#cors_rule}

---

##### `event_notifications`<sup>Optional</sup> <a name="event_notifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.eventNotifications"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>]]

event_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#event_notifications ObsBucket#event_notifications}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#force_destroy ObsBucket#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#id ObsBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_rule`<sup>Optional</sup> <a name="lifecycle_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.lifecycleRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>]]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#lifecycle_rule ObsBucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.logging"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>]]

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#logging ObsBucket#logging}

---

##### `parallel_fs`<sup>Optional</sup> <a name="parallel_fs" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.parallelFs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#parallel_fs ObsBucket#parallel_fs}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#region ObsBucket#region}.

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.serverSideEncryption"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#server_side_encryption ObsBucket#server_side_encryption}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.storageClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#tags ObsBucket#tags}.

---

##### `user_domain_names`<sup>Optional</sup> <a name="user_domain_names" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.userDomainNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#user_domain_names ObsBucket#user_domain_names}.

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.versioning"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#versioning ObsBucket#versioning}.

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.website"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#website ObsBucket#website}

---

##### `worm_policy`<sup>Optional</sup> <a name="worm_policy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.Initializer.parameter.wormPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a>

worm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#worm_policy ObsBucket#worm_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putCorsRule">put_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putEventNotifications">put_event_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLifecycleRule">put_lifecycle_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putServerSideEncryption">put_server_side_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWebsite">put_website</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWormPolicy">put_worm_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetCorsRule">reset_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetEventNotifications">reset_event_notifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetLifecycleRule">reset_lifecycle_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetParallelFs">reset_parallel_fs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetServerSideEncryption">reset_server_side_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetStorageClass">reset_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetUserDomainNames">reset_user_domain_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetVersioning">reset_versioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetWebsite">reset_website</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetWormPolicy">reset_worm_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cors_rule` <a name="put_cors_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putCorsRule"></a>

```python
def put_cors_rule(
  value: typing.Union[IResolvable, typing.List[ObsBucketCorsRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putCorsRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>]]

---

##### `put_event_notifications` <a name="put_event_notifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putEventNotifications"></a>

```python
def put_event_notifications(
  value: typing.Union[IResolvable, typing.List[ObsBucketEventNotifications]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putEventNotifications.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>]]

---

##### `put_lifecycle_rule` <a name="put_lifecycle_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLifecycleRule"></a>

```python
def put_lifecycle_rule(
  value: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLifecycleRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>]]

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLogging"></a>

```python
def put_logging(
  value: typing.Union[IResolvable, typing.List[ObsBucketLogging]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putLogging.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>]]

---

##### `put_server_side_encryption` <a name="put_server_side_encryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putServerSideEncryption"></a>

```python
def put_server_side_encryption(
  algorithm: str,
  kms_key_id: str
) -> None
```

###### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putServerSideEncryption.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#algorithm ObsBucket#algorithm}.

---

###### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putServerSideEncryption.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#kms_key_id ObsBucket#kms_key_id}.

---

##### `put_website` <a name="put_website" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWebsite"></a>

```python
def put_website(
  error_document: str = None,
  index_document: str = None,
  redirect_all_requests_to: str = None,
  routing_rules: str = None
) -> None
```

###### `error_document`<sup>Optional</sup> <a name="error_document" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWebsite.parameter.errorDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#error_document ObsBucket#error_document}.

---

###### `index_document`<sup>Optional</sup> <a name="index_document" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWebsite.parameter.indexDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#index_document ObsBucket#index_document}.

---

###### `redirect_all_requests_to`<sup>Optional</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWebsite.parameter.redirectAllRequestsTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#redirect_all_requests_to ObsBucket#redirect_all_requests_to}.

---

###### `routing_rules`<sup>Optional</sup> <a name="routing_rules" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWebsite.parameter.routingRules"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#routing_rules ObsBucket#routing_rules}.

---

##### `put_worm_policy` <a name="put_worm_policy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWormPolicy"></a>

```python
def put_worm_policy(
  days: typing.Union[int, float] = None,
  years: typing.Union[int, float] = None
) -> None
```

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWormPolicy.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#days ObsBucket#days}.

---

###### `years`<sup>Optional</sup> <a name="years" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.putWormPolicy.parameter.years"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#years ObsBucket#years}.

---

##### `reset_acl` <a name="reset_acl" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_cors_rule` <a name="reset_cors_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetCorsRule"></a>

```python
def reset_cors_rule() -> None
```

##### `reset_event_notifications` <a name="reset_event_notifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetEventNotifications"></a>

```python
def reset_event_notifications() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lifecycle_rule` <a name="reset_lifecycle_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetLifecycleRule"></a>

```python
def reset_lifecycle_rule() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_parallel_fs` <a name="reset_parallel_fs" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetParallelFs"></a>

```python
def reset_parallel_fs() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_server_side_encryption` <a name="reset_server_side_encryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetServerSideEncryption"></a>

```python
def reset_server_side_encryption() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_domain_names` <a name="reset_user_domain_names" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetUserDomainNames"></a>

```python
def reset_user_domain_names() -> None
```

##### `reset_versioning` <a name="reset_versioning" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetVersioning"></a>

```python
def reset_versioning() -> None
```

##### `reset_website` <a name="reset_website" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetWebsite"></a>

```python
def reset_website() -> None
```

##### `reset_worm_policy` <a name="reset_worm_policy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.resetWormPolicy"></a>

```python
def reset_worm_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ObsBucket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ObsBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObsBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObsBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketDomainName">bucket_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketVersion">bucket_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList">ObsBucketCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.eventNotifications">event_notifications</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList">ObsBucketEventNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycleRule">lifecycle_rule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList">ObsBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList">ObsBucketLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.serverSideEncryption">server_side_encryption</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference">ObsBucketServerSideEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference">ObsBucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.wormPolicy">worm_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference">ObsBucketWormPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.aclInput">acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.corsRuleInput">cors_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.eventNotificationsInput">event_notifications_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycleRuleInput">lifecycle_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.loggingInput">logging_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.parallelFsInput">parallel_fs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.serverSideEncryptionInput">server_side_encryption_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.userDomainNamesInput">user_domain_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.versioningInput">versioning_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.websiteInput">website_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.wormPolicyInput">worm_policy_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.acl">acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.parallelFs">parallel_fs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.userDomainNames">user_domain_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.versioning">versioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_domain_name`<sup>Required</sup> <a name="bucket_domain_name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketDomainName"></a>

```python
bucket_domain_name: str
```

- *Type:* str

---

##### `bucket_version`<sup>Required</sup> <a name="bucket_version" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketVersion"></a>

```python
bucket_version: str
```

- *Type:* str

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.corsRule"></a>

```python
cors_rule: ObsBucketCorsRuleList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList">ObsBucketCorsRuleList</a>

---

##### `event_notifications`<sup>Required</sup> <a name="event_notifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.eventNotifications"></a>

```python
event_notifications: ObsBucketEventNotificationsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList">ObsBucketEventNotificationsList</a>

---

##### `lifecycle_rule`<sup>Required</sup> <a name="lifecycle_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycleRule"></a>

```python
lifecycle_rule: ObsBucketLifecycleRuleList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList">ObsBucketLifecycleRuleList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.logging"></a>

```python
logging: ObsBucketLoggingList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList">ObsBucketLoggingList</a>

---

##### `server_side_encryption`<sup>Required</sup> <a name="server_side_encryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.serverSideEncryption"></a>

```python
server_side_encryption: ObsBucketServerSideEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference">ObsBucketServerSideEncryptionOutputReference</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.website"></a>

```python
website: ObsBucketWebsiteOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference">ObsBucketWebsiteOutputReference</a>

---

##### `worm_policy`<sup>Required</sup> <a name="worm_policy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.wormPolicy"></a>

```python
worm_policy: ObsBucketWormPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference">ObsBucketWormPolicyOutputReference</a>

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.aclInput"></a>

```python
acl_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `cors_rule_input`<sup>Optional</sup> <a name="cors_rule_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.corsRuleInput"></a>

```python
cors_rule_input: typing.Union[IResolvable, typing.List[ObsBucketCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>]]

---

##### `event_notifications_input`<sup>Optional</sup> <a name="event_notifications_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.eventNotificationsInput"></a>

```python
event_notifications_input: typing.Union[IResolvable, typing.List[ObsBucketEventNotifications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>]]

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifecycle_rule_input`<sup>Optional</sup> <a name="lifecycle_rule_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.lifecycleRuleInput"></a>

```python
lifecycle_rule_input: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>]]

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.loggingInput"></a>

```python
logging_input: typing.Union[IResolvable, typing.List[ObsBucketLogging]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>]]

---

##### `parallel_fs_input`<sup>Optional</sup> <a name="parallel_fs_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.parallelFsInput"></a>

```python
parallel_fs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `server_side_encryption_input`<sup>Optional</sup> <a name="server_side_encryption_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.serverSideEncryptionInput"></a>

```python
server_side_encryption_input: ObsBucketServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a>

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_domain_names_input`<sup>Optional</sup> <a name="user_domain_names_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.userDomainNamesInput"></a>

```python
user_domain_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `versioning_input`<sup>Optional</sup> <a name="versioning_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.versioningInput"></a>

```python
versioning_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `website_input`<sup>Optional</sup> <a name="website_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.websiteInput"></a>

```python
website_input: ObsBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a>

---

##### `worm_policy_input`<sup>Optional</sup> <a name="worm_policy_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.wormPolicyInput"></a>

```python
worm_policy_input: ObsBucketWormPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a>

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.acl"></a>

```python
acl: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parallel_fs`<sup>Required</sup> <a name="parallel_fs" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.parallelFs"></a>

```python
parallel_fs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_domain_names`<sup>Required</sup> <a name="user_domain_names" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.userDomainNames"></a>

```python
user_domain_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.versioning"></a>

```python
versioning: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketConfig <a name="ObsBucketConfig" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  acl: str = None,
  cors_rule: typing.Union[IResolvable, typing.List[ObsBucketCorsRule]] = None,
  event_notifications: typing.Union[IResolvable, typing.List[ObsBucketEventNotifications]] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  lifecycle_rule: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRule]] = None,
  logging: typing.Union[IResolvable, typing.List[ObsBucketLogging]] = None,
  parallel_fs: typing.Union[bool, IResolvable] = None,
  region: str = None,
  server_side_encryption: ObsBucketServerSideEncryption = None,
  storage_class: str = None,
  tags: typing.Mapping[str] = None,
  user_domain_names: typing.List[str] = None,
  versioning: typing.Union[bool, IResolvable] = None,
  website: ObsBucketWebsite = None,
  worm_policy: ObsBucketWormPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#bucket ObsBucket#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#acl ObsBucket#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.eventNotifications">event_notifications</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>]]</code> | event_notifications block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#force_destroy ObsBucket#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#id ObsBucket#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.lifecycleRule">lifecycle_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>]]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.logging">logging</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>]]</code> | logging block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.parallelFs">parallel_fs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#parallel_fs ObsBucket#parallel_fs}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#region ObsBucket#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.serverSideEncryption">server_side_encryption</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#tags ObsBucket#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.userDomainNames">user_domain_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#user_domain_names ObsBucket#user_domain_names}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.versioning">versioning</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#versioning ObsBucket#versioning}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.website">website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a></code> | website block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.wormPolicy">worm_policy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a></code> | worm_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#bucket ObsBucket#bucket}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.acl"></a>

```python
acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#acl ObsBucket#acl}.

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.corsRule"></a>

```python
cors_rule: typing.Union[IResolvable, typing.List[ObsBucketCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#cors_rule ObsBucket#cors_rule}

---

##### `event_notifications`<sup>Optional</sup> <a name="event_notifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.eventNotifications"></a>

```python
event_notifications: typing.Union[IResolvable, typing.List[ObsBucketEventNotifications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>]]

event_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#event_notifications ObsBucket#event_notifications}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#force_destroy ObsBucket#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#id ObsBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_rule`<sup>Optional</sup> <a name="lifecycle_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.lifecycleRule"></a>

```python
lifecycle_rule: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>]]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#lifecycle_rule ObsBucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.logging"></a>

```python
logging: typing.Union[IResolvable, typing.List[ObsBucketLogging]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>]]

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#logging ObsBucket#logging}

---

##### `parallel_fs`<sup>Optional</sup> <a name="parallel_fs" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.parallelFs"></a>

```python
parallel_fs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#parallel_fs ObsBucket#parallel_fs}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#region ObsBucket#region}.

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.serverSideEncryption"></a>

```python
server_side_encryption: ObsBucketServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#server_side_encryption ObsBucket#server_side_encryption}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#tags ObsBucket#tags}.

---

##### `user_domain_names`<sup>Optional</sup> <a name="user_domain_names" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.userDomainNames"></a>

```python
user_domain_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#user_domain_names ObsBucket#user_domain_names}.

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.versioning"></a>

```python
versioning: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#versioning ObsBucket#versioning}.

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.website"></a>

```python
website: ObsBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#website ObsBucket#website}

---

##### `worm_policy`<sup>Optional</sup> <a name="worm_policy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketConfig.property.wormPolicy"></a>

```python
worm_policy: ObsBucketWormPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a>

worm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#worm_policy ObsBucket#worm_policy}

---

### ObsBucketCorsRule <a name="ObsBucketCorsRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketCorsRule(
  allowed_methods: typing.List[str],
  allowed_origins: typing.List[str],
  allowed_headers: typing.List[str] = None,
  expose_headers: typing.List[str] = None,
  max_age_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#allowed_methods ObsBucket#allowed_methods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#allowed_origins ObsBucket#allowed_origins}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#allowed_headers ObsBucket#allowed_headers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#expose_headers ObsBucket#expose_headers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#max_age_seconds ObsBucket#max_age_seconds}. |

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#allowed_methods ObsBucket#allowed_methods}.

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#allowed_origins ObsBucket#allowed_origins}.

---

##### `allowed_headers`<sup>Optional</sup> <a name="allowed_headers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#allowed_headers ObsBucket#allowed_headers}.

---

##### `expose_headers`<sup>Optional</sup> <a name="expose_headers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#expose_headers ObsBucket#expose_headers}.

---

##### `max_age_seconds`<sup>Optional</sup> <a name="max_age_seconds" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#max_age_seconds ObsBucket#max_age_seconds}.

---

### ObsBucketEventNotifications <a name="ObsBucketEventNotifications" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketEventNotifications(
  events: typing.List[str],
  topic: str,
  filter_rule: typing.Union[IResolvable, typing.List[ObsBucketEventNotificationsFilterRule]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#events ObsBucket#events}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.topic">topic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#topic ObsBucket#topic}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.filterRule">filter_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>]]</code> | filter_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#id ObsBucket#id}. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#events ObsBucket#events}.

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.topic"></a>

```python
topic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#topic ObsBucket#topic}.

---

##### `filter_rule`<sup>Optional</sup> <a name="filter_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.filterRule"></a>

```python
filter_rule: typing.Union[IResolvable, typing.List[ObsBucketEventNotificationsFilterRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>]]

filter_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#filter_rule ObsBucket#filter_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#id ObsBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ObsBucketEventNotificationsFilterRule <a name="ObsBucketEventNotificationsFilterRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketEventNotificationsFilterRule(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#name ObsBucket#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#value ObsBucket#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#name ObsBucket#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#value ObsBucket#value}.

---

### ObsBucketLifecycleRule <a name="ObsBucketLifecycleRule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRule(
  enabled: typing.Union[bool, IResolvable],
  name: str,
  expiration: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleExpiration]] = None,
  noncurrent_version_expiration: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleNoncurrentVersionExpiration]] = None,
  noncurrent_version_transition: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleNoncurrentVersionTransition]] = None,
  prefix: str = None,
  transition: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleTransition]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#enabled ObsBucket#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#name ObsBucket#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.expiration">expiration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>]]</code> | expiration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.noncurrentVersionExpiration">noncurrent_version_expiration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>]]</code> | noncurrent_version_expiration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.noncurrentVersionTransition">noncurrent_version_transition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>]]</code> | noncurrent_version_transition block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#prefix ObsBucket#prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.transition">transition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>]]</code> | transition block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#enabled ObsBucket#enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#name ObsBucket#name}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.expiration"></a>

```python
expiration: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleExpiration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>]]

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#expiration ObsBucket#expiration}

---

##### `noncurrent_version_expiration`<sup>Optional</sup> <a name="noncurrent_version_expiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.noncurrentVersionExpiration"></a>

```python
noncurrent_version_expiration: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleNoncurrentVersionExpiration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>]]

noncurrent_version_expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#noncurrent_version_expiration ObsBucket#noncurrent_version_expiration}

---

##### `noncurrent_version_transition`<sup>Optional</sup> <a name="noncurrent_version_transition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.noncurrentVersionTransition"></a>

```python
noncurrent_version_transition: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleNoncurrentVersionTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>]]

noncurrent_version_transition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#noncurrent_version_transition ObsBucket#noncurrent_version_transition}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#prefix ObsBucket#prefix}.

---

##### `transition`<sup>Optional</sup> <a name="transition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule.property.transition"></a>

```python
transition: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>]]

transition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#transition ObsBucket#transition}

---

### ObsBucketLifecycleRuleExpiration <a name="ObsBucketLifecycleRuleExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleExpiration(
  days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#days ObsBucket#days}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#days ObsBucket#days}.

---

### ObsBucketLifecycleRuleNoncurrentVersionExpiration <a name="ObsBucketLifecycleRuleNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration(
  days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#days ObsBucket#days}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#days ObsBucket#days}.

---

### ObsBucketLifecycleRuleNoncurrentVersionTransition <a name="ObsBucketLifecycleRuleNoncurrentVersionTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition(
  days: typing.Union[int, float],
  storage_class: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#days ObsBucket#days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#days ObsBucket#days}.

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}.

---

### ObsBucketLifecycleRuleTransition <a name="ObsBucketLifecycleRuleTransition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleTransition(
  days: typing.Union[int, float],
  storage_class: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#days ObsBucket#days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#days ObsBucket#days}.

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#storage_class ObsBucket#storage_class}.

---

### ObsBucketLogging <a name="ObsBucketLogging" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLogging(
  target_bucket: str,
  target_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.property.targetBucket">target_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#target_bucket ObsBucket#target_bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.property.targetPrefix">target_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#target_prefix ObsBucket#target_prefix}. |

---

##### `target_bucket`<sup>Required</sup> <a name="target_bucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.property.targetBucket"></a>

```python
target_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#target_bucket ObsBucket#target_bucket}.

---

##### `target_prefix`<sup>Optional</sup> <a name="target_prefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging.property.targetPrefix"></a>

```python
target_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#target_prefix ObsBucket#target_prefix}.

---

### ObsBucketServerSideEncryption <a name="ObsBucketServerSideEncryption" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketServerSideEncryption(
  algorithm: str,
  kms_key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#algorithm ObsBucket#algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#kms_key_id ObsBucket#kms_key_id}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#algorithm ObsBucket#algorithm}.

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#kms_key_id ObsBucket#kms_key_id}.

---

### ObsBucketWebsite <a name="ObsBucketWebsite" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketWebsite(
  error_document: str = None,
  index_document: str = None,
  redirect_all_requests_to: str = None,
  routing_rules: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.errorDocument">error_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#error_document ObsBucket#error_document}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.indexDocument">index_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#index_document ObsBucket#index_document}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.redirectAllRequestsTo">redirect_all_requests_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#redirect_all_requests_to ObsBucket#redirect_all_requests_to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.routingRules">routing_rules</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#routing_rules ObsBucket#routing_rules}. |

---

##### `error_document`<sup>Optional</sup> <a name="error_document" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.errorDocument"></a>

```python
error_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#error_document ObsBucket#error_document}.

---

##### `index_document`<sup>Optional</sup> <a name="index_document" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.indexDocument"></a>

```python
index_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#index_document ObsBucket#index_document}.

---

##### `redirect_all_requests_to`<sup>Optional</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.redirectAllRequestsTo"></a>

```python
redirect_all_requests_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#redirect_all_requests_to ObsBucket#redirect_all_requests_to}.

---

##### `routing_rules`<sup>Optional</sup> <a name="routing_rules" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite.property.routingRules"></a>

```python
routing_rules: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#routing_rules ObsBucket#routing_rules}.

---

### ObsBucketWormPolicy <a name="ObsBucketWormPolicy" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketWormPolicy(
  days: typing.Union[int, float] = None,
  years: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#days ObsBucket#days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy.property.years">years</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#years ObsBucket#years}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#days ObsBucket#days}.

---

##### `years`<sup>Optional</sup> <a name="years" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy.property.years"></a>

```python
years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.25/docs/resources/obs_bucket#years ObsBucket#years}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObsBucketCorsRuleList <a name="ObsBucketCorsRuleList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketCorsRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObsBucketCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ObsBucketCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>]]

---


### ObsBucketCorsRuleOutputReference <a name="ObsBucketCorsRuleOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketCorsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetAllowedHeaders">reset_allowed_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetExposeHeaders">reset_expose_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetMaxAgeSeconds">reset_max_age_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_headers` <a name="reset_allowed_headers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetAllowedHeaders"></a>

```python
def reset_allowed_headers() -> None
```

##### `reset_expose_headers` <a name="reset_expose_headers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetExposeHeaders"></a>

```python
def reset_expose_headers() -> None
```

##### `reset_max_age_seconds` <a name="reset_max_age_seconds" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```python
def reset_max_age_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.exposeHeadersInput">expose_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.maxAgeSecondsInput">max_age_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers_input`<sup>Optional</sup> <a name="expose_headers_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.exposeHeadersInput"></a>

```python
expose_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds_input`<sup>Optional</sup> <a name="max_age_seconds_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```python
max_age_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers`<sup>Required</sup> <a name="expose_headers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds`<sup>Required</sup> <a name="max_age_seconds" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObsBucketCorsRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketCorsRule">ObsBucketCorsRule</a>]

---


### ObsBucketEventNotificationsFilterRuleList <a name="ObsBucketEventNotificationsFilterRuleList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketEventNotificationsFilterRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObsBucketEventNotificationsFilterRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ObsBucketEventNotificationsFilterRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>]]

---


### ObsBucketEventNotificationsFilterRuleOutputReference <a name="ObsBucketEventNotificationsFilterRuleOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObsBucketEventNotificationsFilterRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>]

---


### ObsBucketEventNotificationsList <a name="ObsBucketEventNotificationsList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketEventNotificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObsBucketEventNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ObsBucketEventNotifications]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>]]

---


### ObsBucketEventNotificationsOutputReference <a name="ObsBucketEventNotificationsOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketEventNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.putFilterRule">put_filter_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resetFilterRule">reset_filter_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter_rule` <a name="put_filter_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.putFilterRule"></a>

```python
def put_filter_rule(
  value: typing.Union[IResolvable, typing.List[ObsBucketEventNotificationsFilterRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.putFilterRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>]]

---

##### `reset_filter_rule` <a name="reset_filter_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resetFilterRule"></a>

```python
def reset_filter_rule() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.filterRule">filter_rule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList">ObsBucketEventNotificationsFilterRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.filterRuleInput">filter_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_rule`<sup>Required</sup> <a name="filter_rule" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.filterRule"></a>

```python
filter_rule: ObsBucketEventNotificationsFilterRuleList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRuleList">ObsBucketEventNotificationsFilterRuleList</a>

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_rule_input`<sup>Optional</sup> <a name="filter_rule_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.filterRuleInput"></a>

```python
filter_rule_input: typing.Union[IResolvable, typing.List[ObsBucketEventNotificationsFilterRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsFilterRule">ObsBucketEventNotificationsFilterRule</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObsBucketEventNotifications]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketEventNotifications">ObsBucketEventNotifications</a>]

---


### ObsBucketLifecycleRuleExpirationList <a name="ObsBucketLifecycleRuleExpirationList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleExpirationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObsBucketLifecycleRuleExpirationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleExpiration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>]]

---


### ObsBucketLifecycleRuleExpirationOutputReference <a name="ObsBucketLifecycleRuleExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObsBucketLifecycleRuleExpiration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>]

---


### ObsBucketLifecycleRuleList <a name="ObsBucketLifecycleRuleList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObsBucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>]]

---


### ObsBucketLifecycleRuleNoncurrentVersionExpirationList <a name="ObsBucketLifecycleRuleNoncurrentVersionExpirationList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleNoncurrentVersionExpiration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>]]

---


### ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference <a name="ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObsBucketLifecycleRuleNoncurrentVersionExpiration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>]

---


### ObsBucketLifecycleRuleNoncurrentVersionTransitionList <a name="ObsBucketLifecycleRuleNoncurrentVersionTransitionList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleNoncurrentVersionTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>]]

---


### ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference <a name="ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObsBucketLifecycleRuleNoncurrentVersionTransition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>]

---


### ObsBucketLifecycleRuleOutputReference <a name="ObsBucketLifecycleRuleOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putExpiration">put_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration">put_noncurrent_version_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionTransition">put_noncurrent_version_transition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putTransition">put_transition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration">reset_noncurrent_version_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetNoncurrentVersionTransition">reset_noncurrent_version_transition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetTransition">reset_transition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expiration` <a name="put_expiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putExpiration"></a>

```python
def put_expiration(
  value: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleExpiration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putExpiration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>]]

---

##### `put_noncurrent_version_expiration` <a name="put_noncurrent_version_expiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration"></a>

```python
def put_noncurrent_version_expiration(
  value: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleNoncurrentVersionExpiration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>]]

---

##### `put_noncurrent_version_transition` <a name="put_noncurrent_version_transition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionTransition"></a>

```python
def put_noncurrent_version_transition(
  value: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleNoncurrentVersionTransition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putNoncurrentVersionTransition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>]]

---

##### `put_transition` <a name="put_transition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putTransition"></a>

```python
def put_transition(
  value: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleTransition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.putTransition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>]]

---

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_noncurrent_version_expiration` <a name="reset_noncurrent_version_expiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration"></a>

```python
def reset_noncurrent_version_expiration() -> None
```

##### `reset_noncurrent_version_transition` <a name="reset_noncurrent_version_transition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetNoncurrentVersionTransition"></a>

```python
def reset_noncurrent_version_transition() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_transition` <a name="reset_transition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.resetTransition"></a>

```python
def reset_transition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList">ObsBucketLifecycleRuleExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration">noncurrent_version_expiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList">ObsBucketLifecycleRuleNoncurrentVersionExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransition">noncurrent_version_transition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList">ObsBucketLifecycleRuleNoncurrentVersionTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.transition">transition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList">ObsBucketLifecycleRuleTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.expirationInput">expiration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput">noncurrent_version_expiration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransitionInput">noncurrent_version_transition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.transitionInput">transition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.expiration"></a>

```python
expiration: ObsBucketLifecycleRuleExpirationList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpirationList">ObsBucketLifecycleRuleExpirationList</a>

---

##### `noncurrent_version_expiration`<sup>Required</sup> <a name="noncurrent_version_expiration" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration"></a>

```python
noncurrent_version_expiration: ObsBucketLifecycleRuleNoncurrentVersionExpirationList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpirationList">ObsBucketLifecycleRuleNoncurrentVersionExpirationList</a>

---

##### `noncurrent_version_transition`<sup>Required</sup> <a name="noncurrent_version_transition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransition"></a>

```python
noncurrent_version_transition: ObsBucketLifecycleRuleNoncurrentVersionTransitionList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransitionList">ObsBucketLifecycleRuleNoncurrentVersionTransitionList</a>

---

##### `transition`<sup>Required</sup> <a name="transition" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.transition"></a>

```python
transition: ObsBucketLifecycleRuleTransitionList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList">ObsBucketLifecycleRuleTransitionList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.expirationInput"></a>

```python
expiration_input: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleExpiration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleExpiration">ObsBucketLifecycleRuleExpiration</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `noncurrent_version_expiration_input`<sup>Optional</sup> <a name="noncurrent_version_expiration_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput"></a>

```python
noncurrent_version_expiration_input: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleNoncurrentVersionExpiration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionExpiration">ObsBucketLifecycleRuleNoncurrentVersionExpiration</a>]]

---

##### `noncurrent_version_transition_input`<sup>Optional</sup> <a name="noncurrent_version_transition_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.noncurrentVersionTransitionInput"></a>

```python
noncurrent_version_transition_input: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleNoncurrentVersionTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleNoncurrentVersionTransition">ObsBucketLifecycleRuleNoncurrentVersionTransition</a>]]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `transition_input`<sup>Optional</sup> <a name="transition_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.transitionInput"></a>

```python
transition_input: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObsBucketLifecycleRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRule">ObsBucketLifecycleRule</a>]

---


### ObsBucketLifecycleRuleTransitionList <a name="ObsBucketLifecycleRuleTransitionList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleTransitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObsBucketLifecycleRuleTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ObsBucketLifecycleRuleTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>]]

---


### ObsBucketLifecycleRuleTransitionOutputReference <a name="ObsBucketLifecycleRuleTransitionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLifecycleRuleTransitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransitionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObsBucketLifecycleRuleTransition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLifecycleRuleTransition">ObsBucketLifecycleRuleTransition</a>]

---


### ObsBucketLoggingList <a name="ObsBucketLoggingList" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLoggingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObsBucketLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ObsBucketLogging]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>]]

---


### ObsBucketLoggingOutputReference <a name="ObsBucketLoggingOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resetTargetPrefix">reset_target_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_prefix` <a name="reset_target_prefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.resetTargetPrefix"></a>

```python
def reset_target_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetBucketInput">target_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetPrefixInput">target_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetBucket">target_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetPrefix">target_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_bucket_input`<sup>Optional</sup> <a name="target_bucket_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetBucketInput"></a>

```python
target_bucket_input: str
```

- *Type:* str

---

##### `target_prefix_input`<sup>Optional</sup> <a name="target_prefix_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetPrefixInput"></a>

```python
target_prefix_input: str
```

- *Type:* str

---

##### `target_bucket`<sup>Required</sup> <a name="target_bucket" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetBucket"></a>

```python
target_bucket: str
```

- *Type:* str

---

##### `target_prefix`<sup>Required</sup> <a name="target_prefix" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.targetPrefix"></a>

```python
target_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLoggingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObsBucketLogging]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketLogging">ObsBucketLogging</a>]

---


### ObsBucketServerSideEncryptionOutputReference <a name="ObsBucketServerSideEncryptionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketServerSideEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: ObsBucketServerSideEncryption
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketServerSideEncryption">ObsBucketServerSideEncryption</a>

---


### ObsBucketWebsiteOutputReference <a name="ObsBucketWebsiteOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketWebsiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetErrorDocument">reset_error_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetIndexDocument">reset_index_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetRedirectAllRequestsTo">reset_redirect_all_requests_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetRoutingRules">reset_routing_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_error_document` <a name="reset_error_document" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetErrorDocument"></a>

```python
def reset_error_document() -> None
```

##### `reset_index_document` <a name="reset_index_document" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetIndexDocument"></a>

```python
def reset_index_document() -> None
```

##### `reset_redirect_all_requests_to` <a name="reset_redirect_all_requests_to" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetRedirectAllRequestsTo"></a>

```python
def reset_redirect_all_requests_to() -> None
```

##### `reset_routing_rules` <a name="reset_routing_rules" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.resetRoutingRules"></a>

```python
def reset_routing_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.errorDocumentInput">error_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.indexDocumentInput">index_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.redirectAllRequestsToInput">redirect_all_requests_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.routingRulesInput">routing_rules_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.errorDocument">error_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.indexDocument">index_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.redirectAllRequestsTo">redirect_all_requests_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.routingRules">routing_rules</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_document_input`<sup>Optional</sup> <a name="error_document_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.errorDocumentInput"></a>

```python
error_document_input: str
```

- *Type:* str

---

##### `index_document_input`<sup>Optional</sup> <a name="index_document_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.indexDocumentInput"></a>

```python
index_document_input: str
```

- *Type:* str

---

##### `redirect_all_requests_to_input`<sup>Optional</sup> <a name="redirect_all_requests_to_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.redirectAllRequestsToInput"></a>

```python
redirect_all_requests_to_input: str
```

- *Type:* str

---

##### `routing_rules_input`<sup>Optional</sup> <a name="routing_rules_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.routingRulesInput"></a>

```python
routing_rules_input: str
```

- *Type:* str

---

##### `error_document`<sup>Required</sup> <a name="error_document" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.errorDocument"></a>

```python
error_document: str
```

- *Type:* str

---

##### `index_document`<sup>Required</sup> <a name="index_document" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.indexDocument"></a>

```python
index_document: str
```

- *Type:* str

---

##### `redirect_all_requests_to`<sup>Required</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.redirectAllRequestsTo"></a>

```python
redirect_all_requests_to: str
```

- *Type:* str

---

##### `routing_rules`<sup>Required</sup> <a name="routing_rules" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.routingRules"></a>

```python
routing_rules: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsiteOutputReference.property.internalValue"></a>

```python
internal_value: ObsBucketWebsite
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWebsite">ObsBucketWebsite</a>

---


### ObsBucketWormPolicyOutputReference <a name="ObsBucketWormPolicyOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import obs_bucket

obsBucket.ObsBucketWormPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resetYears">reset_years</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_years` <a name="reset_years" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.resetYears"></a>

```python
def reset_years() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.yearsInput">years_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.years">years</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `years_input`<sup>Optional</sup> <a name="years_input" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.yearsInput"></a>

```python
years_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `years`<sup>Required</sup> <a name="years" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.years"></a>

```python
years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ObsBucketWormPolicy
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucket.ObsBucketWormPolicy">ObsBucketWormPolicy</a>

---



