# `dataOpentelekomcloudHssQuotasV5` Submodule <a name="`dataOpentelekomcloudHssQuotasV5` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudHssQuotasV5 <a name="DataOpentelekomcloudHssQuotasV5" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5 opentelekomcloud_hss_quotas_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhssquotasv5"

dataopentelekomcloudhssquotasv5.NewDataOpentelekomcloudHssQuotasV5(scope Construct, id *string, config DataOpentelekomcloudHssQuotasV5Config) DataOpentelekomcloudHssQuotasV5
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config">DataOpentelekomcloudHssQuotasV5Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config">DataOpentelekomcloudHssQuotasV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetChargingMode">ResetChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetUsedStatus">ResetUsedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetChargingMode` <a name="ResetChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetChargingMode"></a>

```go
func ResetChargingMode()
```

##### `ResetHostName` <a name="ResetHostName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetHostName"></a>

```go
func ResetHostName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUsedStatus` <a name="ResetUsedStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetUsedStatus"></a>

```go
func ResetUsedStatus()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudHssQuotasV5 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhssquotasv5"

dataopentelekomcloudhssquotasv5.DataOpentelekomcloudHssQuotasV5_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhssquotasv5"

dataopentelekomcloudhssquotasv5.DataOpentelekomcloudHssQuotasV5_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhssquotasv5"

dataopentelekomcloudhssquotasv5.DataOpentelekomcloudHssQuotasV5_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhssquotasv5"

dataopentelekomcloudhssquotasv5.DataOpentelekomcloudHssQuotasV5_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudHssQuotasV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudHssQuotasV5 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudHssQuotasV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudHssQuotasV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.quotas">Quotas</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList">DataOpentelekomcloudHssQuotasV5QuotasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.chargingModeInput">ChargingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.usedStatusInput">UsedStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.chargingMode">ChargingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.usedStatus">UsedStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Quotas`<sup>Required</sup> <a name="Quotas" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.quotas"></a>

```go
func Quotas() DataOpentelekomcloudHssQuotasV5QuotasList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList">DataOpentelekomcloudHssQuotasV5QuotasList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `ChargingModeInput`<sup>Optional</sup> <a name="ChargingModeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.chargingModeInput"></a>

```go
func ChargingModeInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UsedStatusInput`<sup>Optional</sup> <a name="UsedStatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.usedStatusInput"></a>

```go
func UsedStatusInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `ChargingMode`<sup>Required</sup> <a name="ChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.chargingMode"></a>

```go
func ChargingMode() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UsedStatus`<sup>Required</sup> <a name="UsedStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.usedStatus"></a>

```go
func UsedStatus() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudHssQuotasV5Config <a name="DataOpentelekomcloudHssQuotasV5Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhssquotasv5"

&dataopentelekomcloudhssquotasv5.DataOpentelekomcloudHssQuotasV5Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Category: *string,
	ChargingMode: *string,
	HostName: *string,
	Id: *string,
	ResourceId: *string,
	Status: *string,
	UsedStatus: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#category DataOpentelekomcloudHssQuotasV5#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.chargingMode">ChargingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#charging_mode DataOpentelekomcloudHssQuotasV5#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#host_name DataOpentelekomcloudHssQuotasV5#host_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#id DataOpentelekomcloudHssQuotasV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#resource_id DataOpentelekomcloudHssQuotasV5#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#status DataOpentelekomcloudHssQuotasV5#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.usedStatus">UsedStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#used_status DataOpentelekomcloudHssQuotasV5#used_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#version DataOpentelekomcloudHssQuotasV5#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#category DataOpentelekomcloudHssQuotasV5#category}.

---

##### `ChargingMode`<sup>Optional</sup> <a name="ChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.chargingMode"></a>

```go
ChargingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#charging_mode DataOpentelekomcloudHssQuotasV5#charging_mode}.

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#host_name DataOpentelekomcloudHssQuotasV5#host_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#id DataOpentelekomcloudHssQuotasV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#resource_id DataOpentelekomcloudHssQuotasV5#resource_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#status DataOpentelekomcloudHssQuotasV5#status}.

---

##### `UsedStatus`<sup>Optional</sup> <a name="UsedStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.usedStatus"></a>

```go
UsedStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#used_status DataOpentelekomcloudHssQuotasV5#used_status}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Config.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/data-sources/hss_quotas_v5#version DataOpentelekomcloudHssQuotasV5#version}.

---

### DataOpentelekomcloudHssQuotasV5Quotas <a name="DataOpentelekomcloudHssQuotasV5Quotas" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Quotas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Quotas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhssquotasv5"

&dataopentelekomcloudhssquotasv5.DataOpentelekomcloudHssQuotasV5Quotas {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudHssQuotasV5QuotasList <a name="DataOpentelekomcloudHssQuotasV5QuotasList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhssquotasv5"

dataopentelekomcloudhssquotasv5.NewDataOpentelekomcloudHssQuotasV5QuotasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudHssQuotasV5QuotasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudHssQuotasV5QuotasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudHssQuotasV5QuotasOutputReference <a name="DataOpentelekomcloudHssQuotasV5QuotasOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudhssquotasv5"

dataopentelekomcloudhssquotasv5.NewDataOpentelekomcloudHssQuotasV5QuotasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudHssQuotasV5QuotasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.chargingMode">ChargingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.sharedQuota">SharedQuota</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.usedStatus">UsedStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Quotas">DataOpentelekomcloudHssQuotasV5Quotas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChargingMode`<sup>Required</sup> <a name="ChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.chargingMode"></a>

```go
func ChargingMode() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SharedQuota`<sup>Required</sup> <a name="SharedQuota" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.sharedQuota"></a>

```go
func SharedQuota() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `UsedStatus`<sup>Required</sup> <a name="UsedStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.usedStatus"></a>

```go
func UsedStatus() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5QuotasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudHssQuotasV5Quotas
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssQuotasV5.DataOpentelekomcloudHssQuotasV5Quotas">DataOpentelekomcloudHssQuotasV5Quotas</a>

---



