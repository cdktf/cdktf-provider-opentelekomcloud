# `dataOpentelekomcloudTaurusdbMysqlBackupsV3` Submodule <a name="`dataOpentelekomcloudTaurusdbMysqlBackupsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudTaurusdbMysqlBackupsV3 <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3 opentelekomcloud_taurusdb_mysql_backups_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudtaurusdbmysqlbackupsv3"

dataopentelekomcloudtaurusdbmysqlbackupsv3.NewDataOpentelekomcloudTaurusdbMysqlBackupsV3(scope Construct, id *string, config DataOpentelekomcloudTaurusdbMysqlBackupsV3Config) DataOpentelekomcloudTaurusdbMysqlBackupsV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config">DataOpentelekomcloudTaurusdbMysqlBackupsV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config">DataOpentelekomcloudTaurusdbMysqlBackupsV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetBackupType">ResetBackupType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetBeginTime">ResetBeginTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetInstanceId">ResetInstanceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackupId` <a name="ResetBackupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetBackupId"></a>

```go
func ResetBackupId()
```

##### `ResetBackupType` <a name="ResetBackupType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetBackupType"></a>

```go
func ResetBackupType()
```

##### `ResetBeginTime` <a name="ResetBeginTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetBeginTime"></a>

```go
func ResetBeginTime()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.resetInstanceId"></a>

```go
func ResetInstanceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlBackupsV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudtaurusdbmysqlbackupsv3"

dataopentelekomcloudtaurusdbmysqlbackupsv3.DataOpentelekomcloudTaurusdbMysqlBackupsV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudtaurusdbmysqlbackupsv3"

dataopentelekomcloudtaurusdbmysqlbackupsv3.DataOpentelekomcloudTaurusdbMysqlBackupsV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudtaurusdbmysqlbackupsv3"

dataopentelekomcloudtaurusdbmysqlbackupsv3.DataOpentelekomcloudTaurusdbMysqlBackupsV3_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudtaurusdbmysqlbackupsv3"

dataopentelekomcloudtaurusdbmysqlbackupsv3.DataOpentelekomcloudTaurusdbMysqlBackupsV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudTaurusdbMysqlBackupsV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudTaurusdbMysqlBackupsV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudTaurusdbMysqlBackupsV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudTaurusdbMysqlBackupsV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backups">Backups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList">DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupIdInput">BackupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupTypeInput">BackupTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.beginTimeInput">BeginTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupId">BackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupType">BackupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.beginTime">BeginTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Backups`<sup>Required</sup> <a name="Backups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backups"></a>

```go
func Backups() DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList">DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList</a>

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupIdInput"></a>

```go
func BackupIdInput() *string
```

- *Type:* *string

---

##### `BackupTypeInput`<sup>Optional</sup> <a name="BackupTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupTypeInput"></a>

```go
func BackupTypeInput() *string
```

- *Type:* *string

---

##### `BeginTimeInput`<sup>Optional</sup> <a name="BeginTimeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.beginTimeInput"></a>

```go
func BeginTimeInput() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupId"></a>

```go
func BackupId() *string
```

- *Type:* *string

---

##### `BackupType`<sup>Required</sup> <a name="BackupType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.backupType"></a>

```go
func BackupType() *string
```

- *Type:* *string

---

##### `BeginTime`<sup>Required</sup> <a name="BeginTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.beginTime"></a>

```go
func BeginTime() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudtaurusdbmysqlbackupsv3"

&dataopentelekomcloudtaurusdbmysqlbackupsv3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups {

}
```


### DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudtaurusdbmysqlbackupsv3"

&dataopentelekomcloudtaurusdbmysqlbackupsv3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore {

}
```


### DataOpentelekomcloudTaurusdbMysqlBackupsV3Config <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudtaurusdbmysqlbackupsv3"

&dataopentelekomcloudtaurusdbmysqlbackupsv3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupId: *string,
	BackupType: *string,
	BeginTime: *string,
	EndTime: *string,
	Id: *string,
	InstanceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.backupId">BackupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#backup_id DataOpentelekomcloudTaurusdbMysqlBackupsV3#backup_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.backupType">BackupType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#backup_type DataOpentelekomcloudTaurusdbMysqlBackupsV3#backup_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.beginTime">BeginTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#begin_time DataOpentelekomcloudTaurusdbMysqlBackupsV3#begin_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.endTime">EndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#end_time DataOpentelekomcloudTaurusdbMysqlBackupsV3#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#id DataOpentelekomcloudTaurusdbMysqlBackupsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#instance_id DataOpentelekomcloudTaurusdbMysqlBackupsV3#instance_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.backupId"></a>

```go
BackupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#backup_id DataOpentelekomcloudTaurusdbMysqlBackupsV3#backup_id}.

---

##### `BackupType`<sup>Optional</sup> <a name="BackupType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.backupType"></a>

```go
BackupType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#backup_type DataOpentelekomcloudTaurusdbMysqlBackupsV3#backup_type}.

---

##### `BeginTime`<sup>Optional</sup> <a name="BeginTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.beginTime"></a>

```go
BeginTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#begin_time DataOpentelekomcloudTaurusdbMysqlBackupsV3#begin_time}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#end_time DataOpentelekomcloudTaurusdbMysqlBackupsV3#end_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#id DataOpentelekomcloudTaurusdbMysqlBackupsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Config.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/taurusdb_mysql_backups_v3#instance_id DataOpentelekomcloudTaurusdbMysqlBackupsV3#instance_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudtaurusdbmysqlbackupsv3"

dataopentelekomcloudtaurusdbmysqlbackupsv3.NewDataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudtaurusdbmysqlbackupsv3"

dataopentelekomcloudtaurusdbmysqlbackupsv3.NewDataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore">DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore">DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastore</a>

---


### DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudtaurusdbmysqlbackupsv3"

dataopentelekomcloudtaurusdbmysqlbackupsv3.NewDataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference <a name="DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudtaurusdbmysqlbackupsv3"

dataopentelekomcloudtaurusdbmysqlbackupsv3.NewDataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.beginTime">BeginTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.datastore">Datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList">DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.takeUpTime">TakeUpTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups">DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BeginTime`<sup>Required</sup> <a name="BeginTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.beginTime"></a>

```go
func BeginTime() *string
```

- *Type:* *string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.datastore"></a>

```go
func Datastore() DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList">DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsDatastoreList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TakeUpTime`<sup>Required</sup> <a name="TakeUpTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.takeUpTime"></a>

```go
func TakeUpTime() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3BackupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudTaurusdbMysqlBackupsV3.DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups">DataOpentelekomcloudTaurusdbMysqlBackupsV3Backups</a>

---



