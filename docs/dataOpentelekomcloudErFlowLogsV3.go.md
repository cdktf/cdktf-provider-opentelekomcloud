# `dataOpentelekomcloudErFlowLogsV3` Submodule <a name="`dataOpentelekomcloudErFlowLogsV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudErFlowLogsV3 <a name="DataOpentelekomcloudErFlowLogsV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3 opentelekomcloud_er_flow_logs_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderflowlogsv3"

dataopentelekomclouderflowlogsv3.NewDataOpentelekomcloudErFlowLogsV3(scope Construct, id *string, config DataOpentelekomcloudErFlowLogsV3Config) DataOpentelekomcloudErFlowLogsV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config">DataOpentelekomcloudErFlowLogsV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config">DataOpentelekomcloudErFlowLogsV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetFlowLogId">ResetFlowLogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetLogGroupId">ResetLogGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetLogStreamId">ResetLogStreamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFlowLogId` <a name="ResetFlowLogId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetFlowLogId"></a>

```go
func ResetFlowLogId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetId"></a>

```go
func ResetId()
```

##### `ResetLogGroupId` <a name="ResetLogGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetLogGroupId"></a>

```go
func ResetLogGroupId()
```

##### `ResetLogStreamId` <a name="ResetLogStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetLogStreamId"></a>

```go
func ResetLogStreamId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetName"></a>

```go
func ResetName()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudErFlowLogsV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderflowlogsv3"

dataopentelekomclouderflowlogsv3.DataOpentelekomcloudErFlowLogsV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderflowlogsv3"

dataopentelekomclouderflowlogsv3.DataOpentelekomcloudErFlowLogsV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderflowlogsv3"

dataopentelekomclouderflowlogsv3.DataOpentelekomcloudErFlowLogsV3_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderflowlogsv3"

dataopentelekomclouderflowlogsv3.DataOpentelekomcloudErFlowLogsV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudErFlowLogsV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudErFlowLogsV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudErFlowLogsV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudErFlowLogsV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogs">FlowLogs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList">DataOpentelekomcloudErFlowLogsV3FlowLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.enabledInput">EnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogIdInput">FlowLogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logStreamIdInput">LogStreamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.enabled">Enabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogId">FlowLogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logStreamId">LogStreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `FlowLogs`<sup>Required</sup> <a name="FlowLogs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogs"></a>

```go
func FlowLogs() DataOpentelekomcloudErFlowLogsV3FlowLogsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList">DataOpentelekomcloudErFlowLogsV3FlowLogsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.enabledInput"></a>

```go
func EnabledInput() *string
```

- *Type:* *string

---

##### `FlowLogIdInput`<sup>Optional</sup> <a name="FlowLogIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogIdInput"></a>

```go
func FlowLogIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logGroupIdInput"></a>

```go
func LogGroupIdInput() *string
```

- *Type:* *string

---

##### `LogStreamIdInput`<sup>Optional</sup> <a name="LogStreamIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logStreamIdInput"></a>

```go
func LogStreamIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.enabled"></a>

```go
func Enabled() *string
```

- *Type:* *string

---

##### `FlowLogId`<sup>Required</sup> <a name="FlowLogId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.flowLogId"></a>

```go
func FlowLogId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.logStreamId"></a>

```go
func LogStreamId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudErFlowLogsV3Config <a name="DataOpentelekomcloudErFlowLogsV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderflowlogsv3"

&dataopentelekomclouderflowlogsv3.DataOpentelekomcloudErFlowLogsV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	Enabled: *string,
	FlowLogId: *string,
	Id: *string,
	LogGroupId: *string,
	LogStreamId: *string,
	Name: *string,
	ResourceId: *string,
	ResourceType: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#instance_id DataOpentelekomcloudErFlowLogsV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.enabled">Enabled</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#enabled DataOpentelekomcloudErFlowLogsV3#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.flowLogId">FlowLogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#flow_log_id DataOpentelekomcloudErFlowLogsV3#flow_log_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#id DataOpentelekomcloudErFlowLogsV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#log_group_id DataOpentelekomcloudErFlowLogsV3#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.logStreamId">LogStreamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#log_stream_id DataOpentelekomcloudErFlowLogsV3#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#name DataOpentelekomcloudErFlowLogsV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#resource_id DataOpentelekomcloudErFlowLogsV3#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#resource_type DataOpentelekomcloudErFlowLogsV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#status DataOpentelekomcloudErFlowLogsV3#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#instance_id DataOpentelekomcloudErFlowLogsV3#instance_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.enabled"></a>

```go
Enabled *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#enabled DataOpentelekomcloudErFlowLogsV3#enabled}.

---

##### `FlowLogId`<sup>Optional</sup> <a name="FlowLogId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.flowLogId"></a>

```go
FlowLogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#flow_log_id DataOpentelekomcloudErFlowLogsV3#flow_log_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#id DataOpentelekomcloudErFlowLogsV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogGroupId`<sup>Optional</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.logGroupId"></a>

```go
LogGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#log_group_id DataOpentelekomcloudErFlowLogsV3#log_group_id}.

---

##### `LogStreamId`<sup>Optional</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.logStreamId"></a>

```go
LogStreamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#log_stream_id DataOpentelekomcloudErFlowLogsV3#log_stream_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#name DataOpentelekomcloudErFlowLogsV3#name}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#resource_id DataOpentelekomcloudErFlowLogsV3#resource_id}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#resource_type DataOpentelekomcloudErFlowLogsV3#resource_type}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/er_flow_logs_v3#status DataOpentelekomcloudErFlowLogsV3#status}.

---

### DataOpentelekomcloudErFlowLogsV3FlowLogs <a name="DataOpentelekomcloudErFlowLogsV3FlowLogs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderflowlogsv3"

&dataopentelekomclouderflowlogsv3.DataOpentelekomcloudErFlowLogsV3FlowLogs {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudErFlowLogsV3FlowLogsList <a name="DataOpentelekomcloudErFlowLogsV3FlowLogsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderflowlogsv3"

dataopentelekomclouderflowlogsv3.NewDataOpentelekomcloudErFlowLogsV3FlowLogsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudErFlowLogsV3FlowLogsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference <a name="DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderflowlogsv3"

dataopentelekomclouderflowlogsv3.NewDataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logStoreType">LogStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logStreamId">LogStreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs">DataOpentelekomcloudErFlowLogsV3FlowLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogStoreType`<sup>Required</sup> <a name="LogStoreType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logStoreType"></a>

```go
func LogStoreType() *string
```

- *Type:* *string

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.logStreamId"></a>

```go
func LogStreamId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudErFlowLogsV3FlowLogs
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErFlowLogsV3.DataOpentelekomcloudErFlowLogsV3FlowLogs">DataOpentelekomcloudErFlowLogsV3FlowLogs</a>

---



