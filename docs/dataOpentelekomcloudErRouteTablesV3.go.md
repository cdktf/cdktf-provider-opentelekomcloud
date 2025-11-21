# `dataOpentelekomcloudErRouteTablesV3` Submodule <a name="`dataOpentelekomcloudErRouteTablesV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudErRouteTablesV3 <a name="DataOpentelekomcloudErRouteTablesV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/er_route_tables_v3 opentelekomcloud_er_route_tables_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.NewDataOpentelekomcloudErRouteTablesV3(scope Construct, id *string, config DataOpentelekomcloudErRouteTablesV3Config) DataOpentelekomcloudErRouteTablesV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config">DataOpentelekomcloudErRouteTablesV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config">DataOpentelekomcloudErRouteTablesV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetRouteTableId">ResetRouteTableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetName"></a>

```go
func ResetName()
```

##### `ResetRouteTableId` <a name="ResetRouteTableId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetRouteTableId"></a>

```go
func ResetRouteTableId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudErRouteTablesV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.DataOpentelekomcloudErRouteTablesV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.DataOpentelekomcloudErRouteTablesV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.DataOpentelekomcloudErRouteTablesV3_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.DataOpentelekomcloudErRouteTablesV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudErRouteTablesV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudErRouteTablesV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudErRouteTablesV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/er_route_tables_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudErRouteTablesV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTables">RouteTables</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList">DataOpentelekomcloudErRouteTablesV3RouteTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTableIdInput">RouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `RouteTables`<sup>Required</sup> <a name="RouteTables" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTables"></a>

```go
func RouteTables() DataOpentelekomcloudErRouteTablesV3RouteTablesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList">DataOpentelekomcloudErRouteTablesV3RouteTablesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RouteTableIdInput`<sup>Optional</sup> <a name="RouteTableIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTableIdInput"></a>

```go
func RouteTableIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.routeTableId"></a>

```go
func RouteTableId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudErRouteTablesV3Config <a name="DataOpentelekomcloudErRouteTablesV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

&dataopentelekomclouderroutetablesv3.DataOpentelekomcloudErRouteTablesV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	Id: *string,
	Name: *string,
	RouteTableId: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/er_route_tables_v3#instance_id DataOpentelekomcloudErRouteTablesV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/er_route_tables_v3#id DataOpentelekomcloudErRouteTablesV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/er_route_tables_v3#name DataOpentelekomcloudErRouteTablesV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/er_route_tables_v3#route_table_id DataOpentelekomcloudErRouteTablesV3#route_table_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/er_route_tables_v3#tags DataOpentelekomcloudErRouteTablesV3#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/er_route_tables_v3#instance_id DataOpentelekomcloudErRouteTablesV3#instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/er_route_tables_v3#id DataOpentelekomcloudErRouteTablesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/er_route_tables_v3#name DataOpentelekomcloudErRouteTablesV3#name}.

---

##### `RouteTableId`<sup>Optional</sup> <a name="RouteTableId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.routeTableId"></a>

```go
RouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/er_route_tables_v3#route_table_id DataOpentelekomcloudErRouteTablesV3#route_table_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.53/docs/data-sources/er_route_tables_v3#tags DataOpentelekomcloudErRouteTablesV3#tags}.

---

### DataOpentelekomcloudErRouteTablesV3RouteTables <a name="DataOpentelekomcloudErRouteTablesV3RouteTables" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

&dataopentelekomclouderroutetablesv3.DataOpentelekomcloudErRouteTablesV3RouteTables {

}
```


### DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

&dataopentelekomclouderroutetablesv3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations {

}
```


### DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

&dataopentelekomclouderroutetablesv3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations {

}
```


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

&dataopentelekomclouderroutetablesv3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes {

}
```


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

&dataopentelekomclouderroutetablesv3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.NewDataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.NewDataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations">DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations">DataOpentelekomcloudErRouteTablesV3RouteTablesAssociations</a>

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.NewDataOpentelekomcloudErRouteTablesV3RouteTablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudErRouteTablesV3RouteTablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.NewDataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.associations">Associations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList">DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.propagations">Propagations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList">DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.routes">Routes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables">DataOpentelekomcloudErRouteTablesV3RouteTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Associations`<sup>Required</sup> <a name="Associations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.associations"></a>

```go
func Associations() DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList">DataOpentelekomcloudErRouteTablesV3RouteTablesAssociationsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Propagations`<sup>Required</sup> <a name="Propagations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.propagations"></a>

```go
func Propagations() DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList">DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList</a>

---

##### `Routes`<sup>Required</sup> <a name="Routes" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.routes"></a>

```go
func Routes() DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudErRouteTablesV3RouteTables
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTables">DataOpentelekomcloudErRouteTablesV3RouteTables</a>

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.NewDataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.NewDataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations">DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations">DataOpentelekomcloudErRouteTablesV3RouteTablesPropagations</a>

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.NewDataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.NewDataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachments</a>

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.NewDataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference <a name="DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomclouderroutetablesv3"

dataopentelekomclouderroutetablesv3.NewDataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.attachments">Attachments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.isBlackhole">IsBlackhole</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.attachments"></a>

```go
func Attachments() DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesAttachmentsList</a>

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsBlackhole`<sup>Required</sup> <a name="IsBlackhole" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.isBlackhole"></a>

```go
func IsBlackhole() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudErRouteTablesV3.DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes">DataOpentelekomcloudErRouteTablesV3RouteTablesRoutes</a>

---



